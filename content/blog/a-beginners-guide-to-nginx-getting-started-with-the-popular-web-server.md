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
updatedAt: 2026-04-16T16:30:00.000Z
coverImg: /images/blog/nginx-guide.webp
coverImgAlt: Nginx for Beginners
published: true
topic: Tech
---
Well, we have all heard about Nginx as a web server, reverse proxy, load balancer, and proxy server for email communications, and it is also known for its performance and stability. Let us start with some hands-on with Nginx and see what it can do.

## How to Set Up Nginx

Let's first install nginx by running the below command

```bash
sudo apt install nginx -y
```

Once installed, it should be automatically up and running. You can check the status by running.

```bash
sudo systemctl status nginx
```

If the status is running, then we all are set. If not, then we may have to explicitly start the service by running.

```bash
sudo systemctl start nginx
```

Now, if everything is set, you can visit `localhost`, and you should see an nginx welcome page.

## Getting Started with Web Server Configuration

After installing Nginx, the Linux system stores all the Nginx files in the directory `/etc`. So let's go to `/etc/nginx` and check all the files. In those files, there is one particular file which is very interesting to us, i.e. `nginx.conf`, which has all the instructions for various configurations.

Let's do one thing. Let's take a backup of that file and let's write our own code.
For taking a backup, lets run this

```bash
sudo mv nginx.conf nginx.conf.backup
```

Now, lets have our configuration.

```bash
events {

}
http {
    server {
        listen 80;
        return 200 "Hello from nginx!"
    }
}
```

It's a simple one; we just defined an HTTP server which listens to port 80, and when accessed, it will just return `Hello from nginx!`

Before that, we need to tell Nginx about our new configuration and then restart Nginx. First, let's check for any syntax mistakes by running.

```bash
sudo nginx -t
```

If there were no errors, it should say successful at the end. Once that is done, lets now restart our nginx by running

```bash
sudo systemctl restart nginx
```

`Note:` There are various ways to reload nginx, which we will mention in further blogs.

Now, let's refresh our `localhost` and see the response. Vola. it shows `Hello from nginx!`

### Conclusion

See, a simple Nginx server is relatively easy to set up. Let's learn more about nginx and its configurations in our next blog.
