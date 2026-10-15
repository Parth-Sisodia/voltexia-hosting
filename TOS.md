#
Voltexia Hosting Terms of Service
 ## 
Last Updated: 9-16-2026 [MM-DD-YYYY]

# 1. Definitions
**1.1 “Company” **– Voltexia Hosting, the provider of game hosting and VPS hosting services.
**1.2 “User” / “Client”** – Any individual or entity accessing, purchasing, or using Voltexia Hosting’s services, website, or Discord server.
**1.3 “Services” **– Any game server hosting, VPS hosting, related software, control panels, APIs, and support provided by the Company.
**1.4 “Platform”** – Collectively, the Company’s website, hosting infrastructure, client portal, and official Discord server.
**1.5 “Official Discord Server”** – The Discord guild operated by Voltexia Hosting for community and support.
**1.6 “Resource Abuse”** – As defined in Section 4.
**1.7 “Enforcement Action”** – Any suspension, termination, restriction, or warning imposed on a User’s Hosting Account or Platform access.
**1.8 “Case Review”** – Initial appeal of an Enforcement Action submitted by a User.
**1.9 “Rereview”** – Second-level appeal reviewed by a higher authority within the Voltexia Hosting Trust & Safety Team.
**1.10 “Business Day” **– Monday through Friday, excluding U.S. federal holidays observed in Pennsylvania.
**1.11 “Alternative Account”** – Any additional account, profile, or identity created or used by a User to circumvent a suspension, ban, restriction, or any other Enforcement Action, or to gain an unfair or prohibited advantage in relation to the Platform or Services.

# 2. Acceptance of Terms
By accessing or using any Service, website, or the Official Discord Server, you agree to be bound by these Terms. If you do not agree, do not use the Platform or Services.

# 3. Prohibited Content & Conduct
**3.1 **No Illegal, Harmful, Unethical, or Questionable Code
**3.2 **User shall not upload, store, execute, run, host, or distribute on any Voltexia Hosting server any code, software, script, or file that:

- Violates any applicable local, state, federal, or international law.

- Is harmful, including malware, ransomware, spyware, viruses, rootkits, backdoors, or cryptojacking software.

- Is unethical or deceptive (e.g., phishing kits, scam pages, fraudulent storefronts).

- Is otherwise questionable as determined by the Company in its sole discretion (e.g., darknet relays, anonymizing proxies for illegal activity, carding tools etc.).

### 3.3 No Abusive or Disruptive Code
Code that intentionally degrades, disrupts, or circumvents the security or performance of the Company’s infrastructure or other Users is strictly forbidden.

### 3.4 No Alternative Accounts
Users are strictly prohibited from creating or using Alternative Accounts for any reason, including but not limited to:

- Circumventing a suspension, ban, or other Enforcement Action.

- Evading billing, resource limits, or promotional restrictions.

- Abusing free trials, discounts, or referral programs.

- Misrepresenting identity to avoid detection of prohibited conduct.

*The Company reserves the right to merge, suspend, or permanently terminate all accounts (including the original and any Alternative Accounts) upon discovery of a violation of this section. No refund shall be issued for any terminated accounts.*

# 4. Resource Abuse (Detailed Definition)
Resource Abuse means any pattern or instance of using system resources significantly beyond normal, expected, or fair usage for the subscribed Service tier, including but not limited to:

**CPU Abuse**: Sustained CPU usage above 90% for more than 2 continuous hours on a shared game/VPS node, or usage that negatively impacts neighboring clients. For dedicated CPU allocations, exceeding the allocated core’s capacity by 200% for more than 1 hour.

**Memory (RAM) Abuse**: Using more than 110% of allocated RAM for more than 15 minutes, or forcing the host system into swap thrashing or OOM (out-of-memory) killer events repeatedly (>3 times in 24 hours).

**Disk I/O Abuse**: Sustained read/write operations exceeding 200 IOPS or 50 MB/s for 1 hour on HDD-based nodes, or 500 IOPS / 100 MB/s for 30 minutes on NVMe nodes. Includes fork bombing, massive random writes, or intentional disk fragmentation.

**Network Abuse**: Generating outbound traffic exceeding 80% of port speed for 15 minutes without legitimate game server demand; UDP flooding; DDoS attacks (inbound or outbound); port scanning external networks; bittorrent seeding on VPS without prior written approval.

**Inode Abuse**: Exceeding 250,000 files on a shared game hosting plan or 500,000 files on a VPS plan, causing filesystem performance degradation.

**Process Abuse**: Running more than double the allowed concurrent processes (e.g., 200 processes when limit is 100), or creating runaway/zombie processes that avoid normal termination.

**Cron/Job Abuse**: Scheduling tasks more frequently than once per 5 minutes unless required by automated game server updates, or running background miners/cryptocurrency tools.

**Storage Outlier Behavior**: Writing, deleting, and rewriting the same storage sectors repeatedly to degrade SSD lifespan (>50 GB write amplification per hour).

**NOTE:** *Resource Abuse is evaluated based on a rolling 24-hour window. The Company may throttle, suspend, or terminate Services immediately upon detection of resource abuse without prior notice.*

# 5. Support System & Communication Abuse
User shall not:

- Submit false, duplicate, or intentionally misleading support tickets.

- Harass, threaten, or use abusive language with support staff via tickets, live chat, or Discord.

- Open more than 3 support tickets in 24 hours regarding the same unresolved issue.

- Demand response times faster than stated in Service Level Agreements (if any).

- Attempt to social engineer support staff into bypassing security or billing controls.

- Use live chat for bot automation, spam, or flooding.

*Violation may result in permanent revocation of support access and immediate account suspension.*

# 6. Official Discord Server Rules agreement & Hosting Account Linkage
**6.1** Compliance with Discord Rules
All Users in the Official Discord Server must comply with (a) Discord’s own Terms of Service and Community Guidelines, and (b) any additional server rules posted by Voltexia Hosting.

**6.2** Ban from Discord May Trigger Hosting Suspension

If a User violates Discord rules so severely that the Company issues a ban/server suspension from the Official Discord Server, the User acknowledges and agrees that:

- The Company may, at its sole discretion, suspend or terminate the User’s Hosting Account without prior notice.

- Suspension may be temporary or permanent based on the nature of the Discord violation.

- The Company is not obligated to provide a refund for any remaining service period following such suspension.

**6.3** No Right to Re-enter Discord
A banned User shall not attempt to rejoin the Official Discord Server via alt accounts, VPNs, or other means. Doing so constitutes an additional Terms violation and may result in permanent termination of hosting services.

**6.4** Alternative Accounts on Discord
Creation or use of Alternative Accounts to circumvent a Discord ban or restriction, or to engage in conduct prohibited under these Terms, is strictly forbidden and may result in immediate termination of all associated hosting accounts without refund.

# 7. Appeals Process for Enforcement Actions
If the Company takes an Enforcement Action (suspension, termination, or major restriction) against a User’s Hosting Account or Platform access, and such action is eligible for appeal (the Company will state eligibility in the enforcement notice), the following process applies:
**7.1** Step 1 – Case Review
User may submit one (1) Case Review via the method specified in the enforcement notice (e.g., appeal form or ticket). The Case Review must include:

- Account email and server ID (if applicable).

- Detailed explanation why the Enforcement Action should be reversed.

- Any supporting evidence.

The Trust & Safety Team will respond within 14 business days. The Case Review decision is final unless the User requests a Rereview.

**7.2** Step 2 – Rereview by Higher Authority
If unsatisfied with the Case Review outcome, the User may request one (1) Rereview within 7 business days of receiving the Case Review decision. The Rereview will be conducted by a senior member of the Voltexia Hosting Trust & Safety Team not involved in the original decision. The Rereview decision is final and binding.

**7.3** Exceptions
Certain Enforcement Actions are not eligible for appeal, including:

- Repeated resource abuse after prior warnings.

- Illegal content or code.

- Fraudulent payment methods.

- Discord ban that also violated Discord’s platform-wide ToS or Community Guidelines (e.g., extreme hate speech, child safety violations).

- Creation or use of Alternative Accounts to circumvent any Enforcement Action.

# 8. Refund Policy
**8.1** No Expectation of Refunds Generally
User agrees that refunds are not provided for any reason except the sole circumstance described in Section 8.2. This includes but is not limited to:

- Change of mind.

- Lack of use.

- Performance issues caused by the User’s own code or configuration.

- Downtime due to scheduled maintenance (announced ≥24 hours in advance).

- DDoS attacks beyond Company’s control.

- Third-party software incompatibility.

**8.2** Exclusive Refund Condition
A refund (pro-rated for remaining time on the affected billing cycle) shall be considered only if:

- A specific feature, functionality, or performance metric was promised in writing by the Company at the time of purchase (e.g., “DDoS protection up to 100 Gbps”, “automatic modpack installer”).

- That feature suffers a malfunction, glitch, or bug that renders it materially unusable.

- The Company fails to fix the issue within 14 business days (excluding U.S. federal holidays) of the User’s first support ticket reporting the issue.

- The User has provided all requested access, logs, and cooperation during the 14-day period.

Refund requests must be submitted within 7 days after the initial purchase. Refunds are issued to the original payment method and do not exceed the amount actually paid for the affected billing term.

# 9. Jurisdiction & Dispute Resolution
**9.1 **Governing Law
These Terms and any dispute arising from the use of the Company’s website, Services, or Official Discord Server shall be governed by and construed in accordance with the laws of Hong Kong, without regard to conflict of law principles.

**9.2 **Exclusive Venue
Any legal action, suit, or proceeding arising out of or relating to these Terms or the Services or Privacy Policy  shall be brought exclusively in the state or federal courts located in Hong Kong. User irrevocably consents to personal jurisdiction and venue therein.

**9.3 **No Class Actions
All disputes must be brought in the User’s individual capacity and not as a plaintiff or class member in any purported class, consolidated, or representative proceeding.

# 10. Company Protection & Miscellaneous Provisions
10.1 Limitation of Liability
To the maximum extent permitted by law, in no event shall Voltexia Hosting, its owners, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or downtime, even if advised of the possibility thereof. Total aggregate liability shall not exceed the amount paid by User to Company in the three (3) months preceding the claim.

**10.2 **Indemnification
User agrees to indemnify, defend, and hold harmless Voltexia Hosting from any claims, damages, losses, or expenses (including reasonable attorneys’ fees) arising from User’s violation of these Terms, use of Services, or violation of any law or third-party rights.

**10.3 **No Warranty
Services are provided “AS IS” and “AS AVAILABLE.” The Company disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.

**10.4 **Right to Modify Services & Terms
The Company may modify these Terms at any time by posting the updated version on the website. Continued use after 7 days constitutes acceptance. For material changes, the Company will provide notice via email or Discord announcement.

**10.5 **Suspension & Termination
The Company may suspend or terminate any account immediately for violation of these Terms, without prior notice, and without refund.

**10.6 **Force Majeure
The Company is not liable for delays or failures in performance resulting from causes beyond reasonable control, including natural disasters, cyberattacks, power failures, or government actions.

**10.7 **Severability
If any provision is found unenforceable, the remaining provisions remain in full force and effect.

**10.8** Inactive accounts / enviroments
Any inactive server or account may be deleted by the Company at the Company's sole discretion without prior notice.

# 11.Official Discord Server Rules, Regulations, and public policies.

**11.1** The distribution or promotion of Not Safe For Work (NSFW) material is strictly prohibited. This mandate encompasses any message, media, or intent shared or established by a user, including suggestive imagery, gore, or sexually explicit text. This rule applies to all facets of a user's presence, including nicknames, status messages, and profile banners.
-# [24H Ban > 7D Ban > 30D Ban > Permanent Ban]
**11.2** Maintaining a harmonious environment is a collective responsibility. Disruptive behavior is defined as any action intended to incite drama, provoke specific individuals, or hinder the flow of constructive conversation. This includes spamming, flooding chat, or intentionally derailing ongoing discussions to create chaos.
-# [Verbal Warning > 1H Timeout > 24H Timeout > 24H Ban]
**11.3** Toxicity is defined as non-constructive engagement designed to aggravate or devalue other community members. We encourage a culture of mutual respect. An exception is granted for direct criticism regarding Server Leadership, provided it remains focused on policy or performance rather than personal attacks. Note that toxicity displayed during an active moderation process will be viewed as an aggravating factor and may result in an extension of the original punishment duration.
-# [Verbal Warning > 1H Timeout > 24H Timeout > 24H Ban]

***Note:***
> Trust & Safety personnel operate with delegated authority and may exercise their judgment in situations not explicitly covered by these rules. If a user believes a punishment was issued unfairly, they may request a formal review by a secondary Trust & Safety member. In such cases, the original moderator and the reviewer will collaborate to reach a final, binding decision. if the user believes the secondary Trust & Safety member was biased, the user may request a secondary Case Review, which Trust & Safety Leadership and/or Management will review the original case as well as the secondary Trust & Safety Team members final decision and how they got to that decision. Toxicity or hostility directed toward staff during a disciplinary action is a violation of server rules and will result in additional penalties.

# By using Voltexia Hosting’s website, Services, or Official Discord Server, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
