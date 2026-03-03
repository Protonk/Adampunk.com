---
layout: ../layouts/SiteLayout.astro
title: Fix your bearing in the hurricane
description: I build tools and explanations that make invisible constraints legible—standards, agents, and enforcement, with receipts.

---

I’m Adam Hyland. I work on the parts of systems that decide what’s possible while pretending not to exist: numerical standards, learned model behavior, and operating‑system enforcement. Those can interact in illegible ways, with modern agentic AI harnessed by a "sandbox" last officially supported 4 years before OpenAI was formed. I try to make those invisible constraints *legible*, not by telling a cleaner story, but by grappling with the mess as it actually behaves.

If you’re here because “vibe coding” isn’t cutting it for your problem and turning agentic AI into a factory floor just seems to waste money on compute, you’re in the right place. Tell me: how does it feel to send off two agents for an answer and get responses that are both right for the wrong reason? The unease it ought to provoke can't be worth the money. If your team wants agentic AI to work inside real, confounding systems—where correctness isn’t a single oracle and progress depends on clean interfaces between people, tools, and ground truth—you can hire me.

I don’t manage agents; I ferret out conditions for success. I build contracts, harnesses, receipts, and interfaces that let autonomy happen without silent drift or pretend control. You can manage agentic AI with stricture if you have the resources and patience of a frontier lab. For everyone else, total operational control is a sign you should write your own code or find harder problems. If you’re moving serious work grounded in the infrastructure of the 20th century through the 21st, I can build and ship the bridge—especially if it’s supposed to be impossible.

Below are some things I am, did, or do. Reach out to adam@adampunk.com if you want to know more.

---

*Software:*

I build and maintain the following with/via/because/despite agentic coding. A recurring theme: agents can build reliable structure so long as you embody ruthless nonchalance.

* *[PAWL](https://github.com/Protonk/PAWL)** is a working exploded view diagram of the macOS Seatbelt sandbox created through mechanical exercise of the operating system. The aim is to make the sandbox legible end-to-end, from policy to observed behavior. About as hard as it looks.
* **[PolicyWitness](https://github.com/Protonk/PolicyWitness)** loads a profile record (SBPL + entitlements) and a probe and reports runtime sandbox decisions on macOS reliably. Harder than it looks.

*Interpretability and robustness of large language models:*

With [Ruoxi Shang](https://ruoxishang.com), I looked at what it means to treat LLMs (GPT-4, Llama, etc.) as trustworthy interfaces to computing. Interpretability is about what counts as an explanation; robustness is about how explanations and behavior degrade under manipulation. One of our products was [Interpreting Robustness](https://docs.google.com/spreadsheets/d/15-f4mxW3niQ3myJAo3V0unLiFlbG9ru4HYthBh6eWbk/edit?usp=sharing) — a Spring 2023 course at the University of Washington connecting interpretability and robustness across a literature that treated separately. I don't like to crow about my own work but students in this class saw 2026 in advance.

*Computer arithmetic:*

I’m interested in how arithmetic becomes infrastructure: negotiated, standardized, embedded into libraries and interfaces, and then treated as “just how computers work.” I like teaching the point where the math ends and the coordination begins.

* **The “Fast” Inverse (Reciprocal) Square Root:** In 2009 I wrote the English Wikipedia article about a famously terse bit of code. It accidentally became famous so now I maintain [0x5f37642f.com](https://0x5f37642f.com), a guided tour through the trick, its folklore, and what it reveals about floating-point arithmetic as well as **[frsrr](https://github.com/Protonk/frsrr)**, an R package which parallelizes and rigorously instruments the 4 lines of C comprising the Fast (Inverse|Reciprocal) Square Root. 
* I’m co-secretary for the **IEEE 754-2029** working group governing binary and decimal floating point excluding the machine-learning formats covered under P3109.


*AI image generation:*

I like finding the promise, premise and limits of machine image generation by taking the systems literally—probing them with aberrant and adversarial prompts until their assumptions become visible. “Glitches” are often just the model telling you what it thinks you asked for.

* [Generative AI Glitch Art: Looking for meaning in all the wrong places](https://youtu.be/r-V-qqLJLF8) — talk for VCU’s Workshop on the Workshop, March 14, 2023.
* [Grappling with widespread machine image generation](/presentations/GATech-CS3001-generation.pdf) — slides for Georgia Tech CS3001, July 19, 2023.
* **Hands Are Hard: Unlearning How We Talk About Machine Learning in the Arts** (listed below) starts from a simple wager: one good way to understand a generator is to study where it fails *reliably*, and then work outward from that fracture. We find the fracture extends out from diffusion models into humanity.

---

*Teaching:*

I teach Information Visualization, which is tool-laden in the way modern life is tool-laden. A core premise of my teaching is that students aren’t “bad at tools” so much as they’re encountering concentrated history: interfaces that embody thousands of person-hours, compromises, and hidden assumptions. Good visualization—and a lot of what we call *learning*—happens when we struggle with that together without pretending it should be effortless.

Courses taught:

* HCDE 411 — Information Visualization (Undergraduate)

  * Autumn 2022; Spring 2023 (with Murtaza Ali); Autumn 2023 (with Murtaza Ali); Winter 2024 (with Murtaza Ali)
* HCDE 511 — Information Visualization (Masters)

  * Winter 2023 (with Murtaza Ali); Summer 2023 (with Dr. Brock Craft)

---

*Peer reviewed publications:*

* Perkins, K., Ghosh, S., Vera, J., Aragon, C., & Hyland, A. (2022). The Persistence of Safety Silence: How Flight Deck Microcultures Influence the Efficacy of Crew Resource Management. *International Journal of Aviation, Aeronautics, and Aerospace*, 9(3). DOI: [https://doi.org/10.15394/ijaaa.2022.1728](https://doi.org/10.15394/ijaaa.2022.1728)
* Keyes, Oscar K. and Hyland, Adam (2023). [Hands Are Hard: Unlearning How We Talk About Machine Learning in the Arts](https://digitalscholarship.unlv.edu/tradition_innovations/vol1/iss1/4/). *Tradition Innovations in Arts, Design, and Media Higher Education*, 1(1)
* Hyland, Adam and Ali, Murtaza (2024). [Tinker or Transfer? A Tale of Two Techniques in Teaching Visualization](https://arxiv.org/abs/2404.10967)
* Charlotte P. Lee and Adam Hyland. (2025). Floating Points. In Proceedings of the sixth decennial Aarhus conference: Computing X Crisis (AAR '25). ACM, 305–313. [https://doi.org/10.1145/3744169.3744191](https://doi.org/10.1145/3744169.3744191)

---

*Other:*

* [Missing on the net](/topics/missing) — documents that should be findable, but aren’t.

---

<sup>*</sup>: Don't believe me(?|,) just watch.
