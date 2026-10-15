# Voltexia Hosting Terms of Service
Last Updated: 10-15-2026 [MM-DD-YYYY]
1. Definitions
1.1 “Company”– Voltexia Hosting, the provider of game hosting and VPS hosting services.
1.2 “User” / “Client” – Any individual or entity accessing, purchasing, or using Voltexia Hosting’s services, website, or Discord server.
1.3 “Services” – Any game server hosting, VPS hosting, related software, control panels, APIs, and support provided by the Company.
1.4 “Platform” – Collectively, the Company’s website, hosting infrastructure, client portal, and official Discord server.
1.5 “Official Discord Server” – The Discord guild operated by PrismaticSky Hosting for community and support.
1.6 “Resource Abuse” – As defined in Section 4.
1.7 “Enforcement Action” – Any suspension, termination, restriction, or warning imposed on a User’s Hosting Account or Platform access.
1.8 “Case Review” – Initial appeal of an Enforcement Action submitted by a User.
1.9 “Rereview” – Second-level appeal reviewed by a higher authority within the Voltexia Hosting Trust & Safety Team.
1.10 “Business Day” – Monday through Friday, as well as any federal holidays observed in the staff member’s place of residence.
1.11 “Alternative Account” – Any additional account, profile, or identity created or used by a User to circumvent a suspension, ban, restriction, or any other Enforcement Action, or to gain an unfair or prohibited advantage in relation to the Platform or Services.
2. Acceptance of Terms
By accessing or using any Service, website, or the Official Discord Server, you agree to be bound by these Terms. If you do not agree, do not use the Platform or Services.
3. Prohibited Content & Conduct
3.1 No Illegal, Harmful, Unethical, or Questionable Code
3.2 User shall not upload, store, execute, run, host, or distribute on any Voltexia Hosting server any code, software, script, or file that:

- Violates any applicable local, state, federal, or international law.

- Is harmful, including malware, ransomware, spyware, viruses, rootkits, backdoors, or cryptojacking software.

- Is unethical or deceptive (e.g., phishing kits, scam pages, fraudulent storefronts).

- Is otherwise questionable as determined by the Company in its sole discretion (e.g., darknet relays, anonymizing proxies for illegal activity, carding tools etc.).

3.3 No Abusive or Disruptive Code
Code that intentionally degrades, disrupts, or circumvents the security or performance of the Company’s infrastructure or other Users is strictly forbidden.

3.4 No Alternative Accounts
Users are strictly prohibited from creating or using Alternative Accounts for any reason, including but not limited to:

- Circumventing a suspension, ban, or other Enforcement Action.

- Evading billing, resource limits, or promotional restrictions.

- Abusing free trials, discounts, or referral programs.

- Misrepresenting identity to avoid detection of prohibited conduct.

The Company reserves the right to merge, suspend, or permanently terminate all accounts (including the original and any Alternative Accounts) upon discovery of a violation of this section. No refund shall be issued for any terminated accounts.
4. Resource Abuse (Detailed Definition)
Resource Abuse means any pattern or instance of using system resources significantly beyond normal, expected, or fair usage for the subscribed Service tier, including but not limited to:

CPU Abuse: Sustained CPU usage above 90% for more than 2 continuous hours on a shared game/VPS node, or usage that negatively impacts neighboring clients. For dedicated CPU allocations, exceeding the allocated core’s capacity by 200% for more than 1 hour.

Memory (RAM) Abuse: Using more than 110% of allocated RAM for more than 15 minutes, or forcing the host system into swap thrashing or OOM (out-of-memory) killer events repeatedly (>3 times in 24 hours).

Disk I/O Abuse: Sustained read/write operations exceeding 200 IOPS or 50 MB/s for 1 hour on HDD-based nodes, or 500 IOPS / 100 MB/s for 30 minutes on NVMe nodes. Includes fork bombing, massive random writes, or intentional disk fragmentation.

Network Abuse: Generating outbound traffic exceeding 80% of port speed for 15 minutes without legitimate game server demand; UDP flooding; DDoS attacks (inbound or outbound); port scanning external networks; bittorrent seeding on VPS without prior written approval.

Inode Abuse: Exceeding 250,000 files on a shared game hosting plan or 500,000 files on a VPS plan, causing filesystem performance degradation.

Process Abuse: Running more than double the allowed concurrent processes (e.g., 200 processes when limit is 100), or creating runaway/zombie processes that avoid normal termination.

Cron/Job Abuse: Scheduling tasks more frequently than once per 5 minutes unless required by automated game server updates, or running background miners/cryptocurrency tools.

Storage Outlier Behavior: Writing, deleting, and rewriting the same storage sectors repeatedly to degrade SSD lifespan (>50 GB write amplification per hour).
NOTE: Resource Abuse is evaluated based on a rolling 24-hour window. The Company may throttle, suspend, or terminate Services immediately upon detection of resource abuse without prior notice.
5. Support System & Communication Abuse
User shall not:
- Submit false, duplicate, or intentionally misleading support tickets.
- Harass, threaten, or use abusive language with support staff via tickets, live chat, or Discord.
- Open more than 3 support tickets in 24 hours regarding the same unresolved issue.
- Demand response times faster than stated in Service Level Agreements (if any).
- Attempt to social engineer support staff into bypassing security or billing controls.
- Use live chat for bot automation, spam, or flooding.
Violation may result in permanent revocation of support access and immediate account suspension.

