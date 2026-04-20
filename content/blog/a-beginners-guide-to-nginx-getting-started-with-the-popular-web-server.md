---
title: "A Beginner's Guide to Nginx: Getting Started with the Popular Web Server."
description: Nginx is a lightweight, high-performance web server that is used by
  millions of websites around the world. It is known for its speed, scalability,
  and reliability. This beginner's guide to Nginx will teach you the basics of
  what you need to know to get started with this popular web server.
metaTitle: "Nginx for Beginners: A Comprehensive Guide to the Popular Web Server"
metaDescription: Learn the basics of Nginx, one of the most popular web servers
  in the world, with this beginner-friendly guide. We'll cover installation on
  Ubuntu, macOS, and Docker, walk through your first configuration, set up a
  reverse proxy, and answer the questions everyone asks when starting out.
keywords: Nginx, web server, beginner, tutorial, guide, installation,
  configuration, static content, reverse proxy
author: Tarun Bhukya
authorProfile: https://www.linkedin.com/in/tarun-kumar-bhukya-40168b85/
createdAt: 2023-10-25T03:17:10.538Z
updatedAt: 2026-04-17T10:30:00.000Z
coverImg: /images/blog/nginx-guide.webp
coverImgAlt: Nginx beginner's guide — installation, configuration, reverse proxy, and common gotchas
published: true
topic: Tech
toc: true
faq:
  - question: "Is Nginx free?"
    answer: "Yes. The open-source edition is free under a BSD license and does everything most sites ever need. F5 sells Nginx Plus with extras like live activity monitoring, advanced load-balancing algorithms, and commercial support, but you won't need it for a long time."
  - question: "Where is the nginx.conf file located?"
    answer: "On Debian/Ubuntu and most Linux distributions it lives at /etc/nginx/nginx.conf, with per-site server blocks in /etc/nginx/sites-available/. On CentOS/RHEL/Fedora it's /etc/nginx/nginx.conf with extra configs in /etc/nginx/conf.d/. On macOS with Homebrew it's /opt/homebrew/etc/nginx/nginx.conf on Apple Silicon or /usr/local/etc/nginx/nginx.conf on Intel. Run `nginx -V 2>&1 | grep -o 'conf-path=\\S*'` to print the compiled-in path."
  - question: "What port does Nginx use by default?"
    answer: "Port 80 for HTTP and 443 for HTTPS, matching the IANA-assigned web defaults. On macOS Homebrew the default is 8080 so Nginx can start without root. You change the port in a server block with the `listen` directive, e.g. `listen 8000;`."
  - question: "How much RAM does Nginx need?"
    answer: "Very little. A worker process idle uses roughly 2–3 MB of RAM; under load each worker typically uses 10–30 MB depending on active connections and proxy buffering. A $5/month VPS with 1 GB of RAM can comfortably front a small to medium production site. Scale RAM up only when you enable aggressive caching, serve lots of large files, or run many worker processes."
  - question: "What is the difference between an Nginx reload and a restart?"
    answer: "`reload` is zero-downtime: Nginx re-reads the config, starts new worker processes with it, and lets old workers finish in-flight requests before exiting them. `restart` kills everything and starts fresh, dropping any connections mid-flight. Use `systemctl reload nginx` (or `nginx -s reload`) for config changes. Reserve `restart` for recovering from a broken state."
  - question: "How do I reload Nginx without downtime?"
    answer: "Test the config with `sudo nginx -t` first — a broken config won't load and Nginx will stay on the previous workers. Once it passes, run `sudo systemctl reload nginx` (or `sudo nginx -s reload`). New workers start with the new config, old workers drain gracefully. If a reload silently seems to revert your change, you had a syntax error; `nginx -t` will tell you the exact line."
  - question: "How do I check which Nginx config file is currently active?"
    answer: "`nginx -V 2>&1 | tr -- - '\\n' | grep conf` prints the compiled-in config path. `nginx -T` (capital T) dumps the entire loaded configuration, including every included file, which is the quickest way to see exactly what Nginx is running. The active sites come from whatever `include` lines the main `nginx.conf` has — typically `/etc/nginx/sites-enabled/*` on Debian/Ubuntu or `/etc/nginx/conf.d/*.conf` on CentOS/RHEL."
  - question: "Can I run Nginx on Windows?"
    answer: "Technically yes — there's a native Windows build — but the Nginx team documents it as a feature-incomplete maintenance port with known limitations (no high-performance I/O, single worker, no UNIX sockets). For anything production-grade on a Windows host, install WSL2 and run Linux Nginx inside it."
  - question: "Should I use Nginx with Docker?"
    answer: "For production, yes. The official `nginx` image is tiny (under 10 MB compressed with alpine), well-maintained, and the default in most modern container deployments. You mount your config with `-v ./nginx.conf:/etc/nginx/nginx.conf:ro` and your static assets with another volume. For local development, it depends — a native install is simpler when you're learning, but Docker is great once you care about reproducibility across teammates."
  - question: "Nginx vs. Apache — which is faster?"
    answer: "Nginx, on raw throughput and concurrent connections, because of its event-driven architecture. Apache has closed a lot of the gap with its event-MPM module, but Nginx's architecture still wins at the high end. For most sites that handle under 1,000 requests per second either is fine; pick whichever you're more comfortable configuring. Apache is still a better fit for shared hosting because of .htaccess."
  - question: "How do I redirect HTTP to HTTPS in Nginx?"
    answer: "Add a dedicated server block on port 80 whose only job is to issue a 301: `server { listen 80; server_name myapp.com; return 301 https://$host$request_uri; }`. If you used `certbot --nginx`, this block is added for you automatically. The 301 tells browsers and search engines the redirect is permanent."
---

If you've spent any time on the web, you've used Nginx — you just didn't know it. It sits quietly in front of a huge share of the internet's traffic, handling requests so quickly that most developers only hear its name when something breaks.

This guide is for the developer who's heard "just put Nginx in front of it" in a thousand Stack Overflow answers and wants to actually understand what that means. By the end you'll know what Nginx is, why it's everywhere, how to install it on whatever machine you're on, and how to write your first working configuration — plus the answers to the questions you'll run into in your first week with it.

## What is Nginx?

Nginx (pronounced "engine-x") is a web server, first released in 2004 by Russian developer Igor Sysoev. He built it to solve what was then called the **C10k problem**: how to handle ten thousand simultaneous connections on a single machine without falling over. Apache, the dominant server at the time, spun up a new thread or process per request, which didn't scale past a few thousand concurrent connections on commodity hardware.

Nginx took a different approach. Under the hood it runs [**one master process and a pool of worker processes**](https://nginx.org/en/docs/beginners_guide.html) — typically one worker per CPU core. Each worker handles thousands of connections concurrently using an asynchronous, event-driven loop instead of a thread per request. The result: it stays fast under load where other servers stall.

Two decades later, Nginx powers roughly a third of the public web, including Netflix, Dropbox, Airbnb, GitHub, and WordPress.com. It's open-source, free, and — unlike many tools with that kind of adoption — genuinely pleasant to configure once you get the mental model.

## Why developers use Nginx

You'll see Nginx doing one of four jobs on most systems:

1. **Web server** — serving static files (HTML, CSS, JS, images) directly to browsers. It's exceptionally fast at this.
2. **Reverse proxy** — sitting in front of an application server (Node.js, Rails, Django, whatever) and forwarding requests to it. This lets your app server focus on application logic while Nginx handles connection management, TLS termination, and slow clients.
3. **Load balancer** — spreading requests across multiple backend servers to handle traffic beyond what a single machine can manage.
4. **Cache** — storing responses so repeat requests don't hit the backend at all.

The comparison most people make is Nginx vs. Apache. The short version: Apache is more flexible at the per-directory level (via `.htaccess`), which makes it a natural fit for shared hosting. Nginx is faster under concurrent load and has a simpler, more explicit configuration model. For modern web apps — where you control the infrastructure and want predictable performance — Nginx is the default choice.

## Installation

Nginx runs on essentially every Unix-like system plus Windows (though the Windows port has known limitations — WSL is a better path if you're on Windows). Here's how to install it on the platforms you're most likely to hit.

### Ubuntu and Debian

```bash
sudo apt update
sudo apt install nginx -y
```

After install, it's typically started automatically. Verify:

```bash
sudo systemctl status nginx
nginx -v
curl -I http://localhost
```

The `curl -I` should return `HTTP/1.1 200 OK` with `Server: nginx/...`. If you see that, you're serving the default welcome page.

### CentOS, RHEL, Rocky Linux, Fedora

```bash
sudo dnf install nginx -y
sudo systemctl enable --now nginx
```

(Older versions may use `yum` instead of `dnf` — both work.)

### macOS

Homebrew is the simplest path:

```bash
brew install nginx
brew services start nginx
```

On Apple Silicon, Nginx installs under `/opt/homebrew/etc/nginx/`. On Intel Macs, it's at `/usr/local/etc/nginx/`. The default HTTP port on macOS is `8080` rather than `80` so Nginx doesn't need root to start.

### Docker

If you want to experiment without installing anything locally, pull the official image:

```bash
docker run --name nginx-test -p 8080:80 -d nginx
curl http://localhost:8080
```

Stop and remove it when you're done with `docker stop nginx-test && docker rm nginx-test`. This is also the standard way Nginx runs in most production container deployments.

### Windows

Nginx has a native Windows build but it's kept as a "feature-incomplete" port by the team. For anything serious, install [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) and follow the Ubuntu instructions inside it.

## The Nginx directory structure

On a typical Ubuntu install, here's what lives where:

| Path | Purpose |
|---|---|
| `/etc/nginx/` | All configuration files |
| `/etc/nginx/nginx.conf` | Main configuration entry point |
| `/etc/nginx/sites-available/` | Server block configs you've written (Ubuntu convention) |
| `/etc/nginx/sites-enabled/` | Symlinks to the server blocks currently active |
| `/etc/nginx/conf.d/` | Additional config snippets auto-loaded by the main config |
| `/var/log/nginx/access.log` | Every request served |
| `/var/log/nginx/error.log` | Errors and warnings — the first place to look when things break |
| `/var/www/html/` | Default document root for the starter welcome page |

The `sites-available` / `sites-enabled` split is a Debian/Ubuntu convention, not an Nginx one — on CentOS or macOS you'll just drop configs into `/etc/nginx/conf.d/` or edit `nginx.conf` directly. Same idea, different plumbing.

## Your first configuration

Nginx configs have a strict [hierarchical structure](https://nginx.org/en/docs/beginners_guide.html): directives live inside blocks, and blocks nest.

```
main context (file level)
└── events       # connection-handling tuning
└── http          # everything HTTP
    └── server    # one per virtual host / domain
        └── location  # per-URL-path rules
```

Before touching anything, back up the default config so you can revert cleanly:

```bash
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
```

Now replace `/etc/nginx/nginx.conf` with a minimal working example:

```nginx
events { }

http {
    server {
        listen 80;
        server_name localhost;

        location / {
            return 200 "Hello from Nginx!\n";
            add_header Content-Type text/plain;
        }
    }
}
```

Reading it top-down:

- **`events { }`** — required block, empty for now. Used later for tuning like `worker_connections`.
- **`http { }`** — wraps all HTTP configuration.
- **`server { }`** — one virtual host. You can have many of these for different domains.
- **`listen 80`** — serve on port 80 (standard HTTP).
- **`server_name localhost`** — respond when the request's `Host` header is `localhost`. Production configs put your domain here.
- **`location / { ... }`** — rules for requests whose path starts with `/` (i.e., everything).
- **`return 200`** — respond with HTTP 200 and the given body.

Before reloading Nginx, always test the config:

```bash
sudo nginx -t
```

A clean result looks like:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Apply it:

```bash
sudo systemctl reload nginx
# or equivalently
sudo nginx -s reload
```

Visit `http://localhost` and you should see `Hello from Nginx!`. That's the smallest working Nginx setup — every real config builds from these same primitives.

## Common beginner tasks

Once the basics click, you'll hit these three patterns constantly.

### Serve a static website

The official recommended pattern [from the Nginx beginner's guide](https://nginx.org/en/docs/beginners_guide.html#static) is to set `root` inside a `location` block:

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        root /var/www/example.com;
        index index.html;
    }

    location /images/ {
        root /var/www/example.com;
    }
}
```

- `root` tells Nginx the filesystem directory for this URL prefix.
- `index` specifies what to serve when the URL path is a directory.
- Nginx picks the location block with the **longest matching prefix**, so `/images/foo.png` is served by the second block.

### Reverse proxy to a Node.js or Rails app

This is the single most common production shape: an app server listens on a high port like `3000`, and Nginx fronts it on port `80`/`443`.

```nginx
server {
    listen 80;
    server_name myapp.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Why those four `proxy_set_header` lines matter: without them, your app server sees every request as coming from `127.0.0.1` on plain HTTP, breaks IP-based rate limiting, logs useless client IPs, and generates wrong redirect URLs. Copy-paste those four lines every time you proxy; future-you will thank you.

### Add HTTPS with Let's Encrypt

Let's Encrypt issues free TLS certificates and [Certbot](https://certbot.eff.org/) automates the whole dance — including rewriting your Nginx config to add the `443` server block and auto-renewal.

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d myapp.com
```

One command, one prompt, and your site is on HTTPS with a certificate that renews itself every 60 days. Modern TLS has no excuse to be painful anymore.

## Starting, stopping, and reloading

Nginx responds to four signals, [per the official docs](https://nginx.org/en/docs/beginners_guide.html#control):

| Signal | Meaning | When to use |
|---|---|---|
| `stop` | Fast shutdown, drop in-flight requests | Emergency only |
| `quit` | Graceful shutdown — finish current requests, then exit | Clean maintenance stops |
| `reload` | Re-read config, start new workers, phase out old ones | Almost every config change |
| `reopen` | Re-open log files | After log rotation |

The two ways to send those signals:

```bash
# Via systemd (Ubuntu, CentOS, etc.)
sudo systemctl reload nginx
sudo systemctl restart nginx
sudo systemctl stop nginx

# Directly
sudo nginx -s reload
sudo nginx -s quit
```

**The important distinction: `reload` vs `restart`.** `reload` is zero-downtime — Nginx starts new workers with the new config, waits for the old workers to finish their in-flight requests, then exits them. `restart` kills everything and starts fresh, dropping any connections mid-flight. Use `reload` for config changes. Reserve `restart` for recovering from a genuinely broken state.

## Common gotchas

The errors you'll hit in your first week:

- **`bind() to 0.0.0.0:80 failed (98: Address already in use)`** — something else is on port 80. Usually Apache on older systems. `sudo lsof -i :80` tells you what; stop it with `sudo systemctl stop apache2`.
- **`502 Bad Gateway`** — Nginx is running but your upstream app isn't. Check that your Node/Rails/Django process is actually listening on the port you put in `proxy_pass`.
- **`permission denied`** when starting Nginx or writing logs — you need `sudo` for ports below 1024 and for writing to `/var/log/nginx`.
- **Config change didn't take effect** — you forgot `nginx -t` then `nginx -s reload`. Editing `nginx.conf` doesn't do anything until you reload.
- **A reload silently reverted your change** — your new config had a syntax error and Nginx's rollback kicked in. Always check `nginx -t` first; errors will tell you the exact line.

## Troubleshooting

When something isn't working, in order:

```bash
# 1. Is Nginx actually running?
sudo systemctl status nginx

# 2. Does the config parse?
sudo nginx -t

# 3. What does Nginx think it's doing?
sudo tail -f /var/log/nginx/error.log

# 4. What's the client actually seeing?
curl -I http://localhost
curl -v http://yourdomain.com
```

90% of issues surface in `error.log` within seconds. The other 10% usually turn out to be DNS, firewall, or an upstream app that crashed.

## FAQ

**Is Nginx free?** Yes. The open-source edition is free under a BSD license and does everything most sites ever need. F5 also sells Nginx Plus with extras like live activity monitoring, advanced load-balancing algorithms, and commercial support, but you will not need it for a long time.

**Where is the `nginx.conf` file located?** On Debian/Ubuntu and most Linux distributions it lives at `/etc/nginx/nginx.conf`, with per-site server blocks in `/etc/nginx/sites-available/`. On CentOS/RHEL/Fedora it's `/etc/nginx/nginx.conf` with extra configs in `/etc/nginx/conf.d/`. On macOS with Homebrew it's `/opt/homebrew/etc/nginx/nginx.conf` on Apple Silicon or `/usr/local/etc/nginx/nginx.conf` on Intel. Run `nginx -V 2>&1 | grep -o 'conf-path=\S*'` to print the compiled-in path on any system.

**What port does Nginx use by default?** Port `80` for HTTP and `443` for HTTPS, matching the IANA-assigned web defaults. On macOS Homebrew the default is `8080` so Nginx can start without root. You change the port in a `server` block with the `listen` directive, e.g. `listen 8000;`.

**How much RAM does Nginx need?** Very little. An idle worker process uses roughly 2–3 MB of RAM; under load each worker typically uses 10–30 MB depending on active connections and proxy buffering. A $5/month VPS with 1 GB of RAM can comfortably front a small-to-medium production site. Scale RAM up only when you enable aggressive caching, serve lots of large files, or configure many worker processes.

**What's the difference between an Nginx reload and a restart?** `reload` is zero-downtime — Nginx re-reads the config, starts new worker processes with it, and lets old workers finish in-flight requests before exiting them. `restart` kills everything and starts fresh, dropping any connections mid-flight. Use `systemctl reload nginx` (or `nginx -s reload`) for config changes. Reserve `restart` for recovering from a broken state.

**How do I reload Nginx without downtime?** Test the config first:

```bash
sudo nginx -t
sudo systemctl reload nginx   # or: sudo nginx -s reload
```

A broken config won't load, and Nginx stays on the previous workers. Once `nginx -t` passes, a reload starts new workers with the new config while old workers drain gracefully. If a reload silently seems to revert your change, you had a syntax error; `nginx -t` will print the exact line.

**How do I check which Nginx config file is currently active?** The quickest answer:

```bash
nginx -V 2>&1 | tr -- - '\n' | grep conf   # compiled-in paths
sudo nginx -T                                # full loaded config, all includes inlined
```

`nginx -T` (capital T) dumps every directive Nginx has loaded — including everything pulled in by `include` lines — so it's the definitive answer to "what is actually running." The active sites on Debian/Ubuntu typically come from `/etc/nginx/sites-enabled/*`; on CentOS/RHEL they come from `/etc/nginx/conf.d/*.conf`.

**Can I run Nginx on Windows?** Technically yes — there's a native Windows build — but the Nginx team documents it as a feature-incomplete maintenance port with known limitations (no high-performance I/O, single worker, no UNIX sockets). For anything production-grade on a Windows host, install WSL2 and run Linux Nginx inside it.

**Should I use Nginx with Docker?** For production, yes. The official `nginx` image is tiny (under 10 MB compressed with alpine), well-maintained, and the default in most modern container deployments. You mount your config with `-v ./nginx.conf:/etc/nginx/nginx.conf:ro` and your static assets with another volume. For local development, it depends — a native install is simpler when you're learning, but Docker is great once you care about reproducibility across teammates.

**Nginx vs. Apache — which is faster?** Nginx, on raw throughput and concurrent connections, because of its event-driven architecture. Apache has closed a lot of the gap with its event-MPM module, but Nginx's architecture still wins at the high end. For most sites that handle less than 1000 requests/second either is fine; pick whichever you're more comfortable configuring. Apache is still a better fit for shared hosting because of `.htaccess`.

**How do I redirect HTTP to HTTPS in Nginx?** Add a dedicated server block on port 80 whose only job is to issue a 301:

```nginx
server {
    listen 80;
    server_name myapp.com;
    return 301 https://$host$request_uri;
}
```

If you used `certbot --nginx`, this block is added for you automatically. The `301` tells browsers and search engines the redirect is permanent, which matters for SEO because it consolidates link equity on the HTTPS URL.

## Next steps

You've got a working mental model of Nginx and enough practical commands to get out of trouble. From here:

- The [official Nginx beginner's guide](https://nginx.org/en/docs/beginners_guide.html) is worth 30 minutes of your time — denser than this post, but authoritative.
- The [admin guide on nginx.com](https://docs.nginx.com/nginx/admin-guide/) covers the full directive reference when you need to look something up.
- If you're running Nginx in production and would rather have someone experienced handle the config + day-2 ops, [Acorn Globus' maintenance and support engagements](/services/maintenance-support/) cover exactly that — we've been on the receiving end of enough Nginx 502s at 3 AM to know where the sharp edges are.

## Conclusion

Nginx rewards the hour you spend understanding it with years of "that just works." Install it, write a small config, break it, fix it — you'll have the feel for it faster than you'd expect. And once the mental model clicks, everything from serving static sites to fronting complex microservice architectures uses the same three primitives: `server` blocks, `location` rules, and `proxy_pass`. The rest is variation on a theme.
