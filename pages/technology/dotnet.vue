<template>
    <!-- Hero  -->
    <Technology.Hero iconPath="/_nuxt/assets/images/tech-stack/dotnet.svg" title=".NET Development Company"
        subTitle="Build your own .Net apps with our expert .Net development services. Create stable, secure, and scalable software tailored to your specific needs."
        callToAction="Get Your Custom Estimate" />

    <!-- Testimonials -->
    <Testimonials />

    <!-- DotNet Services -->
    <Views.Sticky.Page title=".NET Development Services We Offer"
        subTitle="At our .NET development agency, we offer many Dot Net development services. We can help you reach your project goals. Whether you need a mobile app, a web application, or expert advice, we are here for you."
        :services="servicesData" />

    <!-- Why Work with us ? -->
    <Views.Sticky.Page title="Why Work With Us?"
        subTitle="Choosing Acorn Globus means partnering with a dot net development company that truly understands your needs." 
        :services="trustData" />


    <!-- Project Services -->
    <Views.Accordion.Page title="How Can We Help You?"
        subTitle="At Acorn Globus, we support your .NET projects in various ways. Whether you need extra help, a full team, or wish to outsource, we’ve got you covered!"
        :accordions="servicesAccordion" />

    <!-- ShowCase DotNet related projects  -->
    <!-- TODO Check Out Our DotNet Projects -->

    <!-- DotNet tech stack -->
    <Views.Sticky.Page title=".NET Technology Stack We Use"
        subTitle="At Acorn Globus, we use a strong .NET technology stack to create fast and reliable applications. Here are the tools we work with:"
        :services="dotNetTechStacks" />

    
    <!-- Benefits of DotNet -->
    <Views.Sticky.Page title="Benefits of Using .NET"
        :services="dotNetBenfits" />

    <!-- Uses of DotNet -->
    <Views.Sticky.Page title="What is .NET Used For?"
    :services="dotNetUses" />

    <!-- why DotNet popular -->
    <Views.Sticky.Page title="Why is .Net Popular?"
    :services="dotNetPopularity" />

    <!-- FAQ's -->
    <Views.Accordion.Page title="FAQ's"
        :accordions="faqs" />

    <!-- <Technology.OtherRelatedServices /> -->
    <Views.Trust 
        title="Expedite your Business Goals with the Best .Net Web Development Company"
        :rows="agTrustData"
    />
    <Expertise />
</template>

<script setup>

useHead({
    title: 'Reliable .Net Software Development Company | Acorn Globus',
    meta: [
        {
            name: 'description',
            content: 'Get a full range of .NET Development services from a well renowned .NET Development Company. Hire top .NET developers to build secure & scalable apps.',
        },
        {
            hid: 'dotnet-development', // Unique identifier for Nuxt
            name: 'dotnet-development',
            content: '.net development services, hire .net developers, dot net development company, dot net development services, asp.net development company, .net software development services, hire dotnet developers, .net development company​',
        },
    ],
    link: [{ rel: 'canonical', href: 'https://www.acronglobus.com/technology/dotnet' }],
});

const servicesData = [
  {
    "title": ".NET Mobile App Development",
    "description": "We design stunning and user-friendly mobile and web apps for Android, iOS, and web platforms. You can enjoy a flawless experience with our .NET-based mobile framework."
  },
  {
    "title": ".NET Web App Development",
    "description": "We will create fast and reliable web applications using .NET. Your apps will perform well on all browsers and devices, ensuring a smooth user experience for everyone."
  },
  {
    "title": ".NET Enterprise Software Development",
    "description": "We will build custom enterprise software solutions using .NET. This will help automate workflows, manage data better, and support your enterprise's growth."
  },
  {
    "title": ".NET API Development",
    "description": "We will integrate with existing systems and data sources through secure API development using .NET, enabling new functionalities and improving collaboration."
  },
  {
    "title": ".NET Cloud Integration",
    "description": "We will improve the security of your .NET applications by connecting it to top cloud platforms. This will not only scale up your application's functionality but also improve it's performance."
  },
  {
    "title": ".NET UI/UX Design",
    "description": "We will create easy-to-use interfaces (UI) and experiences (UX). A well-designed front end will attract and keep your users engaged."
  },
  {
    "title": ".NET Testing Services",
    "description": "Our team of dedicated .NET developers conducts thorough testing on your .NET applications. We perform unit and integration tests to make sure your app is ready for launch."
  },
  {
    "title": ".NET Maintenance & Support Services",
    "description": "We will monitor and maintain your .NET applications to keep them running smoothly. We will make sure your app stays updated, secure, and performs well."
  }
]

const trustData = [
  {
    "title": "Experienced Team",
    "description": "Our team of expert .NET developers has years of experience working with Fortune 500 companies. They specialize in creating scalable and user-friendly applications tailored to your goals. Hire our .Net developers to begin your project today."
  },
  {
    "title": "Quality Assurance",
    "description": "Quality is our priority. Our dedicated QA team rigorously tests every aspect of your application, to make sure that it is both reliable and secure."
  },
  {
    "title": "Transparent Process",
    "description": "We believe in clear communication. You’ll be updated throughout the project, so you always know what’s happening, from start to finish. We will go beyond the given instructions and offer suggestions to make your application stand out from the rest."
  },
  {
    "title": "Flexible Solutions",
    "description": "We can adapt to your specific business needs, whether you require a full development team or want to hire our .NET developers for your existing team. Our approach allows us to quickly scale resources as needed."
  },
  {
    "title": "Customer Satisfaction",
    "description": "Your satisfaction is our top priority. We focus on understanding your requirements and ensuring you’re delighted with the final product."
  }
]

const servicesAccordion = [
  {
    "title": "Staff Augmentation",
    "description": "Need additional support? Hire our .NET developers to join your team. They will bring their skills and experience to help you complete your project on time, with no long-term commitments."
  },
  {
    "title": "Development Teams",
    "description": "For larger projects, we offer a complete development team that includes .NET developers, designers, and project managers. They’ll focus on your project from start to finish, creating an outstanding application that meets your needs."
  },
  {
    "title": "Outsourcing",
    "description": "Want to concentrate on other aspects of your business? Outsource your .NET development to us. We manage everything from planning to building your application, allowing you to relax while we deliver a high-quality product."
  }
]

const dotNetTechStacks =[
  {
    "title": "ASP.NET Core",
    "description": "We use ASP.NET Core to build modern web apps. It helps us create fast and flexible applications that work on any device and are easy to update."
  },
  {
    "title": "Entity Framework",
    "description": "Entity Framework makes it easy to work with databases. It helps us store and manage data quickly, saving time in our development process."
  },
  {
    "title": "Azure Cloud Services",
    "description": "We use Microsoft Azure for cloud services. Azure provides safe and scalable resources, so your apps can grow and run smoothly in the cloud."
  },
  {
    "title": "Blazor",
    "description": "Blazor lets us build interactive web apps using C#. With Blazor, we can create fun and engaging user experiences that run directly in the browser."
  },
  {
    "title": "Microservices Architecture",
    "description": "We use microservices to make our apps. This means we break them into smaller parts that can work on their own. This makes our apps easier to manage and update."
  },
  {
    "title": "Docker",
    "description": "Docker helps us package our apps in containers. This makes sure they work the same way no matter where they are, making development and deployment much easier."
  },
  {
    "title": "Kubernetes",
    "description": "We use Kubernetes to manage our containerized apps. It helps us deploy, scale, and run our applications smoothly, ensuring they stay up and running."
  },
  {
    "title": "GraphQL",
    "description": "GraphQL helps us get data from our apps quickly. It allows us to ask for exactly what we need, which saves time and makes our apps faster."
  },
  {
    "title": "SignalR",
    "description": "SignalR lets our apps talk to users in real-time. This means we can create live features like chat and notifications that update instantly."
  },
  {
    "title": "IdentityServer",
    "description": "IdentityServer helps us keep your apps safe. It makes sure only the right people can access your data by providing strong user authentication and security."
  }
]

const dotNetBenfits = [
  {
    "title": "Easy to Learn",
    "description": "If you know C# or Visual Basic, you can learn .NET quickly. Its guides help you build applications without getting lost in complex details."
  },
  {
    "title": "Cross-Platform",
    "description": "With .NET Core, you can create applications that run on Windows, macOS, and Linux. This means you can reach more users on different devices."
  },
  {
    "title": "Strong Libraries",
    "description": ".NET has many built-in libraries, like ASP.NET for web apps and Entity Framework for databases. These help you add features without starting from scratch."
  },
  {
    "title": "Security",
    "description": ".NET includes features like built-in authentication and data protection. This helps keep user information safe from hackers."
  },
  {
    "title": "Performance",
    "description": ".NET is designed to run applications fast. It uses Just-In-Time (JIT) compilation to make sure your app runs smoothly even when it has many tasks."
  }
]

const dotNetUses = [
  {
    "title": "Web Applications",
    "description": "Use ASP.NET to create online stores or blogs that load quickly and handle many users at once."
  },
  {
    "title": "Desktop Applications",
    "description": "Build Windows programs like photo editors or games that have a friendly interface and great performance."
  },
  {
    "title": "Mobile Applications",
    "description": "Use Xamarin with .NET to create apps for iOS and Android. This means you can write one codebase for both platforms."
  },
  {
    "title": "Enterprise Applications",
    "description": "Companies use .NET for big systems like inventory management or customer relationship management (CRM) tools that need to work well for many users."
  }
]

const dotNetPopularity = [
  {
    "title": "Versatility",
    "description": ".NET is suitable for many types of apps, like e-commerce websites or mobile games. It adapts to your project needs easily."
  },
  {
    "title": "Developer Experience",
    "description": "Developers enjoy using .NET because of its clear structure. It allows quick coding, easy debugging, and fast testing."
  },
  {
    "title": "Strong Community Support",
    "description": "There’s a large community around .NET, which means many online resources, tutorials, and forums to help when you have questions."
  },
  {
    "title": "Adoption by Major Companies",
    "description": "Well-known companies like Microsoft, Stack Overflow, and Intuit use .NET for their projects. This shows it’s a reliable choice for real-world applications."
  }
]

const faqs = [
  {
    "title": "What is the .NET framework?",
    "description": "The .NET framework is a software development platform created by Microsoft. It provides tools and libraries to help developers build and run applications for Windows, web, and mobile environments."
  },
  {
    "title": "Is .NET framework suitable for building enterprise applications?",
    "description": "Absolutely! The .NET framework is designed for building robust enterprise applications. Its scalability, security features, and support for large databases make it ideal for business solutions."
  },
  {
    "title": "Does .NET framework support cross-platform development?",
    "description": "With the introduction of .NET Core (now part of .NET 5 and later), the framework supports cross-platform development, allowing applications to run on Windows, macOS, and Linux. This means developers can target multiple operating systems with a single codebase."
  },
  {
    "title": "What types of applications can be built using .NET?",
    "description": ".NET can be used to build various types of applications, including web applications (like e-commerce sites), desktop applications (like accounting software), mobile apps (using Xamarin), and enterprise solutions (like customer relationship management systems)."
  },
  {
    "title": "How secure are .NET applications?",
    "description": ".NET ensures application security through features like built-in authentication, data encryption, and secure coding practices. It also includes libraries and frameworks that help developers implement security measures to protect user data and prevent vulnerabilities."
  }
]

const agTrustData = [
  {
    "title": "Certified .NET Professionals",
    "description": "Our team consists of highly skilled and certified .NET developers who possess in-depth knowledge of the framework and its best practices. They stay up-to-date with the latest advancements in .NET to ensure your project leverages the most cutting-edge features and delivers exceptional performance."
  },
  {
    "title": "Experience with Various Technologies and Frameworks",
    "description": "Building a successful web application often involves integrating various technologies and frameworks. Our developers have a broad range of expertise that extends beyond .NET. This allows us to integrate your .NET application with other essential tools and frameworks, ensuring a cohesive and feature-rich final product."
  },
  {
    "title": "Proven Track Record of Success",
    "description": "We have a wealth of experience delivering successful .NET projects for clients across diverse industries. Our portfolio showcases our ability to translate complex requirements into user-friendly and high-performing web applications. We can leverage our experience to ensure your project runs smoothly and meets your specific business goals."
  }
]
</script>

<style scoped></style>