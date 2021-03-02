---
lang: "en"
title: "Redefining Software Quality"
excerpt: "Have you already wondering about your quality processes in place and their origins? 🤔 If not,it's time to ask yourself about why 😉. Maybe you also want to start (over) software quality in your organization. This article is also for you."
coverImage: "/assets/blog/redefining-software-quality/cover.jpg"
date: "2021-03-02T10:01:00.322Z"
author:
  name: Sébastien HOUZÉ
  picture: "/assets/blog/authors/shouze.jpeg"
ogImage:
  url: "/assets/blog/redefining-software-quality/cover.jpg"
---


# Redefining Software Quality


## Do we have to introduce software quality yet?

In recent years many teams have adopted QA thanks to plug & play affordable [CI/CD](https://en.wikipedia.org/wiki/CI/CD) solutions. It's almost a convenience now. Also [DevOps](https://en.wikipedia.org/wiki/DevOps) then [DevSecOps](https://en.wikipedia.org/wiki/DevOps#DevSecOps,_Shifting_Security_Left) have contributed to have Quality as a culture as everybody's became a stakeholder! I bet next gen developers could be qualified as "quality natives"

However, when I search on internet, I'm disappointed because I mainly find:

  1. High level, international standard definitions (ISO 🌐, please certify me 💵)
  2. [Quality Assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA) resources (a lot of noise 🤯)

Come on guys:
- Few teams only are (or will get) certified on ISO software quality standards.
- With QA, most people use tools that help achieving a goal, but don't deeply understand why they use them.

And this is the problem : quality is more a mantra than a tool that you plug or just processes. That's what we will see. So yes, let's re-introduce software quality!  🎉

💡 In later articles of this series, we will also see how we distillate quality from a pragmatic point of view 💯.

## Is software quality a necessity?

In the early years of computer science - in 1968 - a ["Software crisis"](https://en.wikipedia.org/wiki/Software_crisis) happened. The cause was the difficulty of writing useful and efficient computer programs in the required time. Low quality was one of identified symptoms.

> Low quality is like pollution paradox: even polluters don't like to pollute.

But let's go back to our day to day reality. During last 20 years I've seen teams that were delivering a certain level of quality but where not even conscious of this level. Time and budget were the most preponderant factors to deliver software and quality was a third party one. And sometimes it was even considered harmful for (or not included in) time and budget. Maybe because quality is seen by many as a sacred concept, a quest of the absolute.


This is why I think that software quality is a necessity... but team members - please de-sacralize quality 🙏. Here's a simple tip on how to do that:

> **Get agree on a definition** of what software quality is and what it implies in **the current team context.**


## Our team definition of Software Quality

First of all, I want to give you our context:

1. We're a small team of up to 5 developers, each of them with 5 to 20 years of professional experience;
2. working in a small to medium company (less than 20 employees);
3. specialized in hospitality industry:
   - many business units involved;
   - a lot of workflow and automation topics.

So the following definition makes explicit every concept beloved by our team:

> Software Quality represents all the processes and measurements that people can put in place to ensure expectations in an appropriate and continuous improvement mindset.

To sum up, 7 key concepts that we've decided to own in the team:

![Gogaille tech team: 7 software quality key concepts](/assets/blog/redefining-software-quality/gogaille-software-quality-key-concepts.png)


The only thing that we don't define very well are expectations, as we believe it's a kind of alchemy between domain and software experts.

As this definition is personal, your team will need to have its own definition too. So, I can explain you how did we get there.


## Our sources of inspiration

### ISO

Up to 2011, [ISO 9126](https://en.wikipedia.org/wiki/ISO/IEC_9126) definition was:
> Capability of a software product to conform to requirements.

No comment, very synthetic, not so useful. But wait, since that [ISO 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) has refined the definition🎉:

> The quality of a system is the degree to which the system satisfies the stated and implied needs of its various stakeholders, and thus provides value. Those stakeholders' needs (functionality, performance, security, maintainability, etc.) are precisely what is represented in the quality model, which categorizes the product quality into characteristics and sub-characteristics.

More exhaustive... but very theoretic and small to medium teams that will not get certified at any time in their life will probably never cover all parts, they have to choose their battles. Anyway, the quality model is here to help us:

![ISO 25010 quality model](/assets/blog/redefining-software-quality/iso25010-quality-model.png)

### Other industries than software

Hey, don't forget that quality processes in software are vastly inspired from older industries because of the precedence of the former and the fact they have in common to be production/delivery oriented.

#### 1986 - Six Sigma

[Introduced by Bill Smith at Motorola](https://en.wikipedia.org/wiki/Six_Sigma), Six Sigma qualifies processes that lead to a 99.99966% free of defects production.

<img class="float-right" src="/assets/blog/redefining-software-quality/om_droit_au_but.png" alt="Olympique de Marseille soccer team baseline" width="100"/>

We've retained that quality is a question of **continuous measurement** on one side and **clearly defined goals** on the other side. It's straight to the point. As I live in ⚽ Olympique de Marseille soccer team's city I appreciate a lot.

#### 2001 - The Toyota Way

This is [a set of 14 principles](https://en.wikipedia.org/wiki/The_Toyota_Way). It focuses on 2 key areas:

1. continuous improvement → incremental, never ending;
2. respect for people → great people produces great value.

Worth to mention that Toyota became the world's number one car maker in 2007 and remains in top 3 since that time 😉. Here's my personal curation of things that make a lot of sense across the 14 principles:
- Long-term philosophy: people need a purpose to find motivation and establish goals.
- The right process will produce the right results:
  - eliminate wastes (7 identified types);
  - build a culture of stopping to fix problems, to get quality right the first time.

So here we learn that **long-term** and **culture** are key regarding quality. And of course - not a surprise - **people** and their implication is crucial!


## What's next?

As we now have a good definition of quality, we can start our journey with confidence. Please be certain that your quality definition is a dynamic concept so it's a good thing to redefine it through your milestones.

In next posts I want to talk about many subjects, among:

1. When should I bother about quality?
2. How to build a culture of quality?
2. How to rollout quality?

And what about you? 🤔 Please share your context and give back your own definition. You can also suggest topics for following posts I'll try to cover them.
