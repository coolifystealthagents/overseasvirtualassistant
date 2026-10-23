import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from './components';
const site='https://overseasvirtualassistant.com';
const formatDate=(date:string)=>new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${date}T00:00:00Z`));
export const october22BlogPosts=[
  {
    "slug": "executive-inbox-triage-for-a-philippines-va",
    "title": "Triage an Executive Inbox Without Answering for the Executive",
    "description": "A delegated inbox needs sender tiers, draft-only boundaries, and a daily exception review before it can be trusted.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/executive-inbox-triage-for-a-philippines-va.webp",
      "alt": "Triage an Executive Inbox Without Answering for the Executive"
    },
    "source": "https://www.nist.gov/privacy-framework",
    "introduction": [
      "An executive inbox is a queue of decisions disguised as messages. A Philippines-based assistant can sort it, draft replies, and surface what needs attention, but the executive still owns commitments, money, legal positions, and relationships. The workable design separates sorting from speaking. It also gives the assistant a safe way to stop when a message is ambiguous.",
      "Start with one mailbox and one executive. Write down which senders are known, which messages are routine, which require a draft, and which must go straight to the executive without a reply. Then test the design for a week before adding a second mailbox. The goal is not an empty inbox. It is a shorter decision queue with fewer missed items."
    ],
    "sections": [
      {
        "heading": "1. Sort by sender and request, not by unread count",
        "paragraphs": [
          "Create a small set of sender groups: direct reports, key customers, board and investors, vendors, unknown senders, and automated notices. Within each group, label the request type: decision needed, information only, scheduling, complaint, invoice, legal or compliance, and personal. The assistant sorts on those two dimensions. A message from a key customer asking for a discount is not the same as a newsletter from the same company.",
          "Use a stable folder or label scheme that the executive can read at a glance. Avoid dozens of labels. Five or six folders plus a daily summary are usually enough. The summary should list the few items that need a decision, the drafts waiting for review, and anything that looks like a deadline. Do not mark a message as handled because it was moved. The record should show what the assistant did and what remains."
        ]
      },
      {
        "heading": "2. Draft, do not send, until authority is written",
        "paragraphs": [
          "A draft is useful because it gives the executive a starting point without creating a commitment. The assistant may draft acknowledgements, routine scheduling replies, and requests for missing information. The assistant should not send a message that sets a price, accepts a contract, promises a date, discusses a legal claim, or speaks for the executive on a sensitive relationship. Those messages should be flagged with a short note explaining why.",
          "When the executive approves a recurring reply, write the rule down with examples. For instance, the assistant may confirm a meeting time once the calendar shows the slot and the executive has approved the invite list. The rule should include the stop condition. A scheduling reply becomes sensitive when the attendee list includes a regulator, a litigant, or someone the executive has asked to screen."
        ]
      },
      {
        "heading": "3. Give every exception a destination",
        "paragraphs": [
          "Exceptions are normal in an executive inbox. The assistant needs a named person for legal, finance, security, HR, and family or personal matters. It also needs a safe holding state: the message stays in a review folder with the reason and the next checkpoint. Do not let the assistant forward sensitive material to a general queue or ask the sender for more detail without approval.",
          "Review the exception log daily during the first month. Look for patterns: one sender who always triggers a stop, one request type that lacks a rule, or one executive who never reviews the drafts. Fix the rule or the routing rather than asking the assistant to guess better. A stop that happens for a clear reason is a success. A silent delay is the failure."
        ]
      },
      {
        "heading": "4. Measure the queue, not the inbox",
        "paragraphs": [
          "Track items received, sorted, drafted, sent under an approved rule, escalated, and still awaiting the executive. Record the age of the oldest decision item and the number of items that bounced back because the assistant lacked information. Review a sample of sent messages each week for accuracy and tone. The executive should spend the review time on decisions, not on re-reading every routine reply.",
          "After a month, ask whether the inbox is calmer. Are decisions reaching the executive earlier? Are any relationships suffering because a draft was too slow? Is the assistant spending time on low-value sorting? Adjust the folder scheme and the rule set. The measure of a delegated inbox is not zero unread messages. It is fewer missed decisions and fewer messages sent in the executive's name without authority."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA send emails from an executive mailbox?",
        "answer": "Only under written rules for narrow, routine messages. Commitments, money, legal matters, and sensitive relationships stay with the executive."
      },
      {
        "question": "How many labels should the inbox use?",
        "answer": "A small set that the executive can scan quickly. Five or six groups plus a daily summary is a practical starting point."
      },
      {
        "question": "What should happen to an ambiguous message?",
        "answer": "Keep it in a review folder with the reason, the owner, and the next checkpoint. Do not improvise a reply."
      }
    ],
    "relatedSlugs": [
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant",
      "meeting-notes-that-separate-decisions-from-discussion"
    ]
  },
  {
    "slug": "calendar-management-rules-for-a-remote-assistant",
    "title": "Calendar Rules That Prevent a Remote Assistant From Double Booking",
    "description": "Time zones, buffers, recurring events, and approval limits need to be written before a VA touches the calendar.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/calendar-management-rules-for-a-remote-assistant.webp",
      "alt": "Calendar Rules That Prevent a Remote Assistant From Double Booking"
    },
    "source": "https://www.w3.org/TR/WCAG22/",
    "introduction": [
      "Calendar work looks simple until a meeting lands at the wrong hour or a recurring event quietly blocks a client's only free afternoon. A remote assistant needs rules for time zones, buffers, priorities, and who may move what. The rules should be visible in the calendar itself, not only in a training document.",
      "The first step is a short access review. The assistant should be able to view the executive's calendar and create holds, but moving a meeting with an external client or a board member may need approval. Write those limits down and test them with a real week. A calendar that reflects the executive's priorities is more valuable than one with perfect color coding."
    ],
    "sections": [
      {
        "heading": "1. Write the time zone rule in the event",
        "paragraphs": [
          "Use the executive's home time zone as the reference and show the attendee's local time in the description when it differs. A meeting at 9 a.m. Eastern is not 9 a.m. for a team in Manila. The assistant should confirm the zone whenever a request says morning, afternoon, or end of day. If the request comes from a region with daylight saving, check the date rather than assuming the current offset.",
          "For recurring events, record the rule that generated the series and the next review date. A weekly call that was useful in January may be obsolete in April. The assistant should flag series that have not been reviewed for a quarter rather than silently keeping them. When a public holiday affects a recurring meeting, propose an alternative instead of cancelling without notice."
        ]
      },
      {
        "heading": "2. Protect focus time and travel",
        "paragraphs": [
          "The executive's calendar should include blocks for focused work, preparation, and travel. The assistant may defend those blocks from routine requests but should not treat them as absolute. A customer escalation can justify moving a focus block; a recurring internal update usually cannot. Write the priority order so the assistant does not have to guess.",
          "Add a 10 to 15 minute buffer around external calls and a longer buffer before presentations or travel. The buffer is not empty time. It is the space for notes, follow-up, and delays. If the calendar is already full, the assistant should surface the conflict with two or three options rather than double booking and hoping one meeting ends early."
        ]
      },
      {
        "heading": "3. Separate holds, invites, and cancellations",
        "paragraphs": [
          "A hold is not an invite. Use a clear label such as tentative or hold, and tell the requester when the hold will expire. Do not send an invite until the executive or the approved rule confirms the attendee list, the duration, and the purpose. For cancellations, check whether a vendor, a customer, or a board member needs a personal note. A calendar cancellation is not always enough communication.",
          "If the assistant has authority to reschedule internal meetings, define which ones. External meetings, interviews, and anything involving money or legal matters should stay with the executive or the chief of staff. The assistant can propose alternatives and prepare the message, but the decision to move a consequential meeting belongs to the owner."
        ]
      },
      {
        "heading": "4. Review the week before it starts",
        "paragraphs": [
          "Every Friday or Monday, review the coming week for conflicts, missing preparation, and unrealistic travel. Check that the executive has the documents for each external meeting and that the assistant knows which meetings need notes. Look for back-to-back calls with no transition time and for recurring events that no longer have an agenda.",
          "After the week, note what changed and why. A calendar that is constantly rearranged may need a different meeting cadence, not a faster assistant. Share the pattern with the executive and adjust the rules. The calendar is a planning tool, not a scoreboard for busyness."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA accept meeting invites on behalf of an executive?",
        "answer": "Only within written rules. Accepting an external commitment or a meeting with a sensitive attendee should require approval."
      },
      {
        "question": "How should time zones be recorded?",
        "answer": "Use the executive's home zone as the reference and include the attendee's local time in the event description. Confirm the date when daylight saving may apply."
      },
      {
        "question": "What is a reasonable buffer between meetings?",
        "answer": "Ten to fifteen minutes for routine calls and longer before presentations or travel. The right buffer depends on the executive's role and the meeting type."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "travel-booking-boundaries-for-a-virtual-assistant",
      "meeting-notes-that-separate-decisions-from-discussion"
    ]
  },
  {
    "slug": "travel-booking-boundaries-for-a-virtual-assistant",
    "title": "Travel Research and Booking Boundaries for a Virtual Assistant",
    "description": "A VA can compare options and prepare an itinerary. Purchases, refunds, and passport data need a different level of authority.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/travel-booking-boundaries-for-a-virtual-assistant.webp",
      "alt": "Travel Research and Booking Boundaries for a Virtual Assistant"
    },
    "source": "https://www.nist.gov/privacy-framework",
    "introduction": [
      "Travel support is a good test of a VA's judgment because it combines research, deadlines, money, and personal data. A capable assistant can save hours by comparing flights, hotels, and ground transport. The same assistant can create a costly problem by buying a nonrefundable ticket or sharing a passport image in the wrong channel.",
      "The safe design gives the assistant a research and preparation lane, then a separate approval and purchase lane. The traveler should see the tradeoffs before money moves. The assistant should never have to guess whether a fare, a visa rule, or a refund policy is acceptable."
    ],
    "sections": [
      {
        "heading": "1. Prepare a decision-ready travel brief",
        "paragraphs": [
          "For each trip, capture the purpose, the required arrival time, the preferred airports, the budget range, the luggage needs, the loyalty programs, and any accessibility or dietary requirements. Then prepare two or three options with the total cost, the refund rules, the connection risk, and the cancellation terms. Put the recommendation first and the tradeoffs beside it.",
          "Do not hide a risky connection behind a lower fare. Mark the risk in plain language: short connection, separate ticket, overnight layover, or airport change. If the traveler has a critical meeting, recommend arriving the day before. The assistant's value is not the cheapest option. It is a choice the traveler can make quickly with fewer surprises."
        ]
      },
      {
        "heading": "2. Keep purchases and refunds with an authorized owner",
        "paragraphs": [
          "The assistant may place a hold, request a quote, or prepare a booking link. The actual purchase should be made by the traveler or an authorized finance owner under the company's policy. If the assistant is allowed to buy, set a clear cap, a refundable-only rule, and a named approver for exceptions. Record the approval before the transaction.",
          "Refunds and changes are harder than bookings. A fare rule may allow a credit but not a refund, or a hotel may charge one night. The assistant can gather the policy and prepare the request, but the decision to accept a penalty belongs to the traveler or finance. Keep the original confirmation and the change record together so the cost is traceable."
        ]
      },
      {
        "heading": "3. Minimize identity and payment data",
        "paragraphs": [
          "Passport numbers, frequent flyer credentials, and payment details are sensitive. Use the approved travel profile or a secure form rather than chat or email attachments. Do not ask a traveler to send a photo of a passport unless the booking channel requires it and the storage location is approved. Mask the document number in notes and share only the expiration date when that is enough.",
          "If a booking tool stores the data, confirm who can see it and how long it is retained. Remove temporary access after the trip. If a document is lost or sent to the wrong person, follow the incident path rather than deleting the message and hoping. The assistant should know the reporting route before a mistake happens."
        ]
      },
      {
        "heading": "4. Build the itinerary for the traveler, not the file",
        "paragraphs": [
          "The final itinerary should fit on one screen and answer the practical questions: where to be, when to leave, what to bring, who to call, and what happens if a flight is delayed. Include the confirmation numbers, the local time, the address, and the cancellation deadline. Send a copy to the traveler and keep one in the approved trip folder.",
          "After the trip, collect the receipts and the actual costs. Compare them with the estimate and note what changed. A repeated pattern, such as a hotel that is always over budget or an airport that always adds a delay, should change the next brief. The assistant's travel playbook improves through that comparison, not through another generic checklist."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA book flights?",
        "answer": "Only under a written policy with a spending cap, an approval step, and a refundable-fare rule where possible. Many companies keep the purchase with the traveler or finance."
      },
      {
        "question": "How should passport data be shared?",
        "answer": "Use the approved travel profile or secure form. Avoid chat and email attachments, and mask the number in notes."
      },
      {
        "question": "Who decides whether to accept a change fee?",
        "answer": "The traveler or the finance owner, based on the fare rule and the business need. The assistant prepares the facts and the options."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "meeting-notes-that-separate-decisions-from-discussion"
    ]
  },
  {
    "slug": "meeting-notes-that-separate-decisions-from-discussion",
    "title": "Meeting Notes That Separate Decisions From Discussion",
    "description": "A useful note records the decision, the owner, the date, and the open question. A transcript is not a decision record.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/meeting-notes-that-separate-decisions-from-discussion.webp",
      "alt": "Meeting Notes That Separate Decisions From Discussion"
    },
    "source": "https://sre.google/workbook/postmortem-culture/",
    "introduction": [
      "A meeting note becomes valuable when someone who missed the meeting can act on it. That requires more than a transcript or a list of topics. It needs a clear decision, a named owner, a date, and the evidence behind the choice. A Philippines-based assistant can prepare that record without pretending to be the decision maker.",
      "The assistant should agree the template with the meeting owner before the first meeting. A short template is easier to fill consistently. It also makes the boundary visible: the assistant records what was decided, but does not decide what the meeting meant when the discussion was ambiguous."
    ],
    "sections": [
      {
        "heading": "1. Capture the question before the answer",
        "paragraphs": [
          "For each agenda item, write the question the group is trying to answer. Then record the options discussed, the evidence mentioned, and the decision or the reason no decision was made. This structure prevents a note from becoming a summary of who talked the most. It also shows when a decision was deferred and what is needed to unblock it.",
          "If the meeting is exploratory, say so. Not every discussion needs a decision. Record the open questions, the people who will research them, and the next checkpoint. A note that invents a decision to look complete is worse than a note that says the group did not decide."
        ]
      },
      {
        "heading": "2. Name owners and dates, not teams",
        "paragraphs": [
          "An action assigned to a team tends to disappear. Assign it to a person, with a backup where the work is critical. Include the specific output, the due date, and the evidence that will prove completion. If the action depends on another team, record the dependency and the person who will follow up.",
          "Use the same owner names that appear in the project system. Avoid nicknames or ambiguous initials. If the meeting owner wants a summary for a wider audience, prepare a separate version that removes sensitive detail and keeps the decisions and actions. Do not send the raw notes to a distribution list without review."
        ]
      },
      {
        "heading": "3. Protect sensitive content",
        "paragraphs": [
          "Meeting notes can contain personnel matters, legal advice, customer data, or security details. Use the approved repository and the agreed access list. Do not paste sensitive quotes into a general chat channel. If the meeting covers a protected topic, record only the decision and the reference to the protected source.",
          "The assistant should know which meetings are off limits for notes or which require a different retention rule. A board meeting, an investigation, and a clinical case may have specific handling requirements. When in doubt, stop and ask the meeting owner before distributing anything."
        ]
      },
      {
        "heading": "4. Publish a short, searchable record",
        "paragraphs": [
          "Send the note within one business day. Put the decisions and actions at the top, then the discussion summary, then the attendees and the source documents. Use headings and short paragraphs so the note works on a phone and with a screen reader. A consistent title format makes it searchable later.",
          "Follow up on the actions at the next meeting. A note that is never reviewed becomes an archive of good intentions. The assistant can prepare an action status list before the meeting and flag items that are overdue. That small habit turns the note into a management tool rather than a transcript."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should a VA record meetings?",
        "answer": "Only with the consent required by the organization and the participants. A recording is not a substitute for a clear decision record."
      },
      {
        "question": "How detailed should the notes be?",
        "answer": "Enough for an absent person to understand the decision, the owner, the date, and the next step. Detailed transcripts are usually unnecessary and can create privacy risk."
      },
      {
        "question": "What if the meeting ends without a decision?",
        "answer": "Record the open question, the options, the missing evidence, and the next checkpoint. Do not invent a decision."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "crm-hygiene-tasks-for-an-overseas-va",
    "title": "CRM Cleanup Tasks a VA Can Own Without Guessing",
    "description": "Deduplication, field completion, and opt-out handling need a source hierarchy and a merge rule before a VA edits records.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/crm-hygiene-tasks-for-an-overseas-va.webp",
      "alt": "CRM Cleanup Tasks a VA Can Own Without Guessing"
    },
    "source": "https://www.nist.gov/privacy-framework",
    "introduction": [
      "A messy CRM is a quiet tax on every sales and support team. A VA can help clean it, but careless edits can merge two real customers, overwrite a preferred name, or restore someone who asked not to be contacted. The work needs a source hierarchy and a conservative merge rule.",
      "Start with one object and one field set. For example, clean company names and domains for open opportunities, not the entire database. Define what counts as a duplicate, which record wins, and what happens when the evidence conflicts. Then review a sample before the assistant works at scale."
    ],
    "sections": [
      {
        "heading": "1. Rank the sources",
        "paragraphs": [
          "Decide which system is authoritative for each field. The billing system may own the legal company name, the support tool may own the preferred contact method, and the CRM may own the opportunity stage. When two sources disagree, the assistant records both and routes the conflict to the field owner. It does not pick the value that looks cleaner.",
          "For email and phone fields, use a verification step rather than a guess. A bounced email is evidence, but it does not always mean the contact left. A shared inbox may be the correct route for a small company. Record the date and source of the last verification so the next reviewer knows how fresh the data is."
        ]
      },
      {
        "heading": "2. Merge slowly and keep a trail",
        "paragraphs": [
          "Before merging, compare the domain, the address, the tax identifier where appropriate, the contact history, and the open opportunities. Two records with the same company name may be different entities. A parent and a subsidiary may share a domain but need separate billing. If the evidence is incomplete, link the records instead of merging them.",
          "Keep the source record identifiers and a note explaining the merge. Do not delete the losing record if the system requires an audit trail. After the merge, check that open tasks, owners, and activities moved correctly. A merge that hides a duplicate but drops an open deal is not a cleanup."
        ]
      },
      {
        "heading": "3. Treat consent and opt-outs as protected",
        "paragraphs": [
          "An opt-out is not a data quality problem. It is a legal and relationship boundary. The assistant should be able to apply a suppression rule and confirm that it propagated to the sending systems. Do not restore a contact because the email looks valid or because a salesperson asks. Route the request to the privacy or marketing owner.",
          "When importing a list, check the source, the permission basis, and the suppression list before loading. Remove records that cannot be explained. Keep a record of the import, the file hash, and the person who approved it. A clean CRM starts with a clean intake, not with repeated cleanup after a bad import."
        ]
      },
      {
        "heading": "4. Report data quality, not activity",
        "paragraphs": [
          "Track duplicates found, merged, linked, and unresolved; fields completed with a source; opt-outs applied; bounces; and records still missing an owner. Sample the merged records and the suppressed contacts each month. A high merge count is not success if the merges were wrong.",
          "Publish a short data quality note for the sales and support owners. Include the rules used and the cases that need a decision. The goal is a CRM that the team trusts enough to use, not a database that looks tidy in a screenshot."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA delete duplicate CRM records?",
        "answer": "Usually no. Link or merge under a written rule and keep an audit trail. Deletion should stay with the system owner."
      },
      {
        "question": "Who decides which record wins?",
        "answer": "The owner of the field or system, using the declared source hierarchy. The assistant documents the conflict and routes it."
      },
      {
        "question": "How should opt-outs be handled?",
        "answer": "Apply the approved suppression rule, verify propagation to sending systems, and route exceptions to the privacy or marketing owner."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "ecommerce-order-support-boundaries",
    "title": "Ecommerce Order Support Boundaries for a Virtual Assistant",
    "description": "Where is my order, address changes, and refunds each carry different authority. Give the VA a lane for each.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/ecommerce-order-support-boundaries.webp",
      "alt": "Ecommerce Order Support Boundaries for a Virtual Assistant"
    },
    "source": "https://www.pcisecuritystandards.org/",
    "introduction": [
      "Ecommerce support is repetitive until it is not. A simple order status question can turn into an address change, a refund, a chargeback, or a fraud concern. A VA can handle the routine lane well if the store owner defines where the lane ends. Without that boundary, the assistant may promise a delivery date the carrier cannot meet or change an address on a suspicious order.",
      "Start with the top five contact reasons and write a decision path for each. Include the evidence the assistant needs, the action it may take, the message it may send, and the owner for exceptions. Then test the paths with real examples before the assistant works a live queue."
    ],
    "sections": [
      {
        "heading": "1. Answer order status with carrier evidence",
        "paragraphs": [
          "Use the order system and the carrier tracking page as the source. Give the customer the current status, the last scan date, and the next expected event. If the tracking has not updated, say that instead of inventing a location. Offer the store's policy for a delayed package and the date when the customer should contact again.",
          "Do not promise a delivery date that the carrier has not provided. If the package is marked delivered but the customer cannot find it, follow the store's lost-package process. That may include a carrier claim, a replacement, or a refund, but the decision belongs to the store owner. The assistant collects the facts and explains the next step."
        ]
      },
      {
        "heading": "2. Treat address changes as a risk decision",
        "paragraphs": [
          "An address change after an order is placed can be legitimate or fraudulent. Check the order status, the payment verification, the customer's history, and the store's rule. If the order has shipped, the carrier may not allow a change. If the order is still processing, the assistant may update it only within the approved rule.",
          "For high-value orders, a new address or a change close to shipment may need a second verification. Do not ask for a full card number or a government ID through chat. Use the store's approved verification method. If the risk is unclear, hold the order and route it to the fraud or operations owner rather than guessing."
        ]
      },
      {
        "heading": "3. Keep refunds and chargebacks with the owner",
        "paragraphs": [
          "The assistant may explain the refund policy, collect the reason, and prepare the case. It should not approve a refund, promise a timeline, or decide a chargeback unless a written rule delegates that action. Use neutral states: request received, under review, approved, refunded, or declined with reason.",
          "Payment data should stay in the payment system. Do not ask for card numbers, bank credentials, or screenshots of a banking app. If a customer sends sensitive data by mistake, follow the incident path and avoid forwarding it. The assistant's job is a clean handoff, not an investigation of the customer's bank account."
        ]
      },
      {
        "heading": "4. Review contacts for product and policy clues",
        "paragraphs": [
          "Group contacts by reason and product. A spike in address changes may indicate a checkout problem. A spike in delayed packages may indicate a carrier issue. A repeated refund question may mean the policy page is unclear. Share the pattern with the store owner, not just the individual tickets.",
          "Sample the assistant's replies each week for accuracy, tone, and boundary compliance. Check that the customer received a next step and that the internal record matches the store system. A fast reply that creates a second contact is not a good outcome. The measure is fewer repeats and fewer surprises, not a lower average handle time."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA issue refunds?",
        "answer": "Only if the store has a written rule with a cap, eligible reasons, and an audit trail. Otherwise the assistant prepares the case for the owner."
      },
      {
        "question": "How should an address change be verified?",
        "answer": "Use the store's approved verification method. High-value or late changes may need a second check or an owner decision."
      },
      {
        "question": "What should a VA do with a chargeback?",
        "answer": "Route it to the payments or fraud owner immediately with the order and contact record. Do not debate the customer or promise an outcome."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "research-brief-sourcing-for-a-va",
    "title": "A Research Brief a VA Can Fill Without Inventing Sources",
    "description": "Give the question, the source hierarchy, the recency rule, and the citation format before asking for research.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/research-brief-sourcing-for-a-va.webp",
      "alt": "A Research Brief a VA Can Fill Without Inventing Sources"
    },
    "source": "https://www.gao.gov/products/gao-20-283g",
    "introduction": [
      "Research is one of the most useful VA tasks and one of the easiest to fake. A fluent summary can hide a missing source, an outdated page, or a statistic that was never in the document. The fix is a brief that makes the evidence visible and a review step that checks the citation against the claim.",
      "Use research for bounded questions: compare three vendors, find the current filing deadline, summarize a public consultation, or collect five examples of a policy. Do not ask for an open-ended market analysis without a decision, a scope, and a definition of done. A narrow question produces a useful answer."
    ],
    "sections": [
      {
        "heading": "1. Write the question and the decision",
        "paragraphs": [
          "Start with the decision the research will support. For example: should we shortlist vendor A or B for a customer support tool? Then write the sub-questions: pricing model, implementation time, data location, accessibility, and exit terms. Each sub-question needs a source type and a recency rule.",
          "Define what would change the decision. If both vendors meet the must-haves, the recommendation may depend on cost or support. If neither meets a legal requirement, the answer is no. The brief should tell the assistant which facts are decisive and which are context. That prevents a long report that never reaches a recommendation."
        ]
      },
      {
        "heading": "2. Set a source hierarchy",
        "paragraphs": [
          "Primary sources come first: the vendor's current contract, the regulator's page, the official statistics release, or the standard itself. Secondary sources such as reputable news or analyst summaries can add context but should not be the only support for a material claim. User reviews are useful for sentiment, not for legal or security facts.",
          "Record the access date and the version for every source. A page that changes daily needs a timestamped copy or a quote. If a source is paywalled or inaccessible, say so instead of citing it from memory. The assistant should never invent a citation to fill a gap. An honest gap is easier to review than a confident error."
        ]
      },
      {
        "heading": "3. Use a claim-by-claim evidence table",
        "paragraphs": [
          "For each material claim, record the exact source, the quoted passage or page, the date, and the assistant's interpretation. Keep the quote short. If the source says may and the summary says will, the review should catch the change. The table also makes it easy for the decision owner to spot a claim that lacks support.",
          "Separate facts from recommendations. A fact is what the source says. A recommendation is what the assistant thinks the company should do. Label the recommendation and explain the tradeoff. The decision owner may disagree, but they should be able to see the reasoning without re-reading every source."
        ]
      },
      {
        "heading": "4. Review before the brief leaves the team",
        "paragraphs": [
          "Check a sample of citations against the source. Look for broken links, outdated versions, and quotes taken out of context. Check that the recommendation follows from the evidence and that the limitations are visible. If the brief includes numbers, confirm the denominator and the date.",
          "Keep the source list and the evidence table with the brief. A future reviewer should be able to update the research without starting over. When the decision is made, record which evidence mattered and what remained uncertain. That record improves the next brief more than a longer template."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA use AI tools for research?",
        "answer": "Only under the company's approved tool policy. Every material claim still needs a real source that a reviewer can open."
      },
      {
        "question": "How recent must sources be?",
        "answer": "Set the rule per question. Regulations and prices may need the current version; background concepts may allow older sources."
      },
      {
        "question": "What if the source is paywalled?",
        "answer": "Say so and provide the citation and the accessible summary. Do not claim to have read material you could not access."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "social-media-scheduling-approval-flow",
    "title": "A Social Scheduling Flow With Real Approval",
    "description": "Drafting, asset rights, scheduling, and community replies are separate permissions. Do not collapse them into one login.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/social-media-scheduling-approval-flow.webp",
      "alt": "A Social Scheduling Flow With Real Approval"
    },
    "source": "https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/",
    "introduction": [
      "Social media looks like a scheduling task until a post with the wrong image or an unapproved claim goes live. A VA can prepare a month of drafts, organize assets, and schedule approved content. The approval step is what keeps the account from becoming a liability.",
      "Build the flow around a content calendar and a simple status model: idea, drafted, fact checked, approved, scheduled, published, and reviewed. Each status has an owner. The assistant can move work through the first stages and schedule only what the owner has approved."
    ],
    "sections": [
      {
        "heading": "1. Draft from an approved brief",
        "paragraphs": [
          "Give the assistant the audience, the goal, the key message, the proof points, and the call to action. Require a source for every factual claim, including product features, prices, and dates. If the post needs a customer story, use an approved case study rather than inventing a quote.",
          "Draft the caption, the alt text, and the image description together. Alt text is not a place to repeat the caption. It should describe the image for someone who cannot see it. Check that the post makes sense without the image and that the image does not contain text that is missing from the caption."
        ]
      },
      {
        "heading": "2. Check asset rights before scheduling",
        "paragraphs": [
          "Record where each image, video, or font came from and what license covers it. Do not use a stock image outside its license or a customer photo without permission. If the asset was generated with an AI tool, follow the company's disclosure and usage rules. The assistant should be able to show the source for every asset in the calendar.",
          "Keep the original file and the exported version. Check the dimensions and the file size for each platform. A cropped image may cut off a face or a logo. Review the mobile preview, not only the desktop composer. A post that looks fine in the tool can look broken in the feed."
        ]
      },
      {
        "heading": "3. Separate scheduling from community replies",
        "paragraphs": [
          "Scheduling approved posts is a different permission from replying to comments and messages. A VA may draft replies to routine questions, but complaints, legal threats, safety issues, and press inquiries should go to the named owner. The assistant should not delete criticism or block a user without a written rule.",
          "If the assistant handles replies, give them a response library and a stop list. Record the response time and the escalation path. A fast reply that promises a refund or shares private account information can create a bigger problem than a short delay."
        ]
      },
      {
        "heading": "4. Review performance without chasing vanity",
        "paragraphs": [
          "Track reach, engagement, clicks, and conversions with the same definitions each month. A post with high likes but no qualified traffic may not be worth repeating. Check the comments for questions that reveal a product or policy gap. Share those with the owner rather than answering them ad hoc.",
          "After each cycle, review the approval flow. Were posts delayed because the approver was unavailable? Did an unapproved claim slip through? Was an asset missing rights? Fix the step that failed. The goal is a reliable publishing rhythm, not a viral post."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA post without approval?",
        "answer": "Only for pre-approved content types and only if the company has written that rule. Sensitive topics, new claims, and crisis replies need an owner."
      },
      {
        "question": "Who owns the social accounts?",
        "answer": "The company. The assistant should use a named, least-privilege login and never a shared personal account."
      },
      {
        "question": "How should comments be handled?",
        "answer": "Routine questions can use an approved reply library. Complaints, threats, legal issues, and press inquiries go to the named owner."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "receipt-and-invoice-prep-without-bookkeeping-authority",
    "title": "Receipt and Invoice Prep Without Bookkeeping Authority",
    "description": "A VA can collect, label, and route receipts. Coding, tax treatment, and payment approval stay with finance.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/receipt-and-invoice-prep-without-bookkeeping-authority.webp",
      "alt": "Receipt and Invoice Prep Without Bookkeeping Authority"
    },
    "source": "https://www.pcisecuritystandards.org/",
    "introduction": [
      "Receipt and invoice preparation is a common first task for a VA because it is repetitive and easy to check. It is also close to money, tax, and confidential supplier data. The assistant can do the collection and labeling work well if finance keeps the decisions.",
      "Define the lane by document type and threshold. A routine receipt under a stated amount may be coded to a standard category. A missing receipt, a foreign invoice, a contractor payment, or a tax question should stop and route to the finance owner. The assistant should never guess a tax treatment or approve a payment."
    ],
    "sections": [
      {
        "heading": "1. Collect the complete document",
        "paragraphs": [
          "For each expense, capture the supplier, the date, the amount, the currency, the tax, the payment method, and the business purpose. Check that the image is readable and that the total matches the line items. If a receipt is missing, record the reason and the alternative evidence instead of recreating the document.",
          "Use the approved storage location and a consistent file name. Do not keep copies in personal email or a chat thread. If the document contains card data, mask it before sharing. The assistant should know which fields finance needs and which fields should never be copied."
        ]
      },
      {
        "heading": "2. Apply only the written coding rules",
        "paragraphs": [
          "Finance may allow a small set of standard categories for routine expenses. Write those rules with examples and a threshold. If a receipt does not fit, the assistant routes it with a question. Do not split a purchase to stay under a threshold or change the date to match a period.",
          "For invoices, check the purchase order, the supplier, the amount, and the approval reference. A mismatch is a stop, not a puzzle to solve by editing the invoice. Record the discrepancy and the owner who must resolve it. The finance team should see the original document and the note, not a cleaned-up version."
        ]
      },
      {
        "heading": "3. Protect supplier and payment data",
        "paragraphs": [
          "Supplier bank details and employee card data are high-risk. Use the approved accounts payable channel and never send banking changes by email without a verification step. A message that appears to come from a known supplier can be fraudulent. Follow the company's callback rule and record the verification.",
          "Do not store full card numbers, bank credentials, or tax identifiers in the expense tracker. Use masked references and the finance system. If a document is lost or sent to the wrong person, report it immediately. The assistant's speed is less important than keeping the data in the approved system."
        ]
      },
      {
        "heading": "4. Reconcile the batch before handoff",
        "paragraphs": [
          "At the end of each batch, count the documents received, the documents complete, the documents missing information, and the documents routed. Reconcile the total to the source list. A batch that is missing three receipts should show three open items, not a lower total.",
          "Send finance a short summary with the batch reference, the exceptions, and the questions. Keep the original documents and the summary together. After finance reviews the batch, record the corrections and update the coding guide if a rule was unclear. That loop reduces the next batch's exceptions."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA code expenses?",
        "answer": "Only within written standard categories and thresholds. Unusual, foreign, or high-value items go to the finance owner."
      },
      {
        "question": "What should a VA do with a missing receipt?",
        "answer": "Record the reason and any alternative evidence, then route it. Do not recreate or alter a document."
      },
      {
        "question": "How should supplier bank changes be handled?",
        "answer": "Use the company's verification and callback rule. Never act on an email request alone."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "customer-follow-up-sequences-with-consent",
    "title": "Customer Follow-Up Sequences That Respect Consent",
    "description": "A follow-up is not a license to keep messaging. Build segments, frequency caps, opt-outs, and a stop rule.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/customer-follow-up-sequences-with-consent.webp",
      "alt": "Customer Follow-Up Sequences That Respect Consent"
    },
    "source": "https://www.nist.gov/privacy-framework",
    "introduction": [
      "Follow-up sequences are useful when they answer a real question or move a customer toward a decision. They become harmful when they ignore a preference, repeat the same message, or continue after a clear no. A VA can run the mechanics if the business defines consent, frequency, and stop rules.",
      "Start with one sequence and one audience. Write the trigger, the message purpose, the wait between messages, and the condition that ends the sequence. Then check the opt-out path end to end. A sequence that cannot stop reliably is not ready to send."
    ],
    "sections": [
      {
        "heading": "1. Define the trigger and the audience",
        "paragraphs": [
          "A trigger is an event, not a feeling. Examples include a demo request, an abandoned cart, a support ticket that was resolved, or a trial that is about to expire. The audience should be narrow enough that the message is relevant. Do not combine customers who asked for different things into one sequence.",
          "Check the permission basis for the audience before loading it. If the contact opted out of marketing, exclude them. If the basis is unclear, ask the owner. Keep the source of the list and the date it was pulled. A clean sequence starts with a clean audience."
        ]
      },
      {
        "heading": "2. Write one purpose per message",
        "paragraphs": [
          "Each message should have one job: answer a question, offer a next step, confirm a detail, or ask for a decision. Do not combine a survey, a discount, and a product announcement in the same email. The customer should be able to understand the message in a few seconds.",
          "Use the customer's language and the approved product terms. Avoid false urgency, invented deadlines, and claims that the product cannot support. If the message includes a quote or a statistic, link to the source. The assistant can draft, but the owner should approve any claim about price, results, or availability."
        ]
      },
      {
        "heading": "3. Control frequency and stop conditions",
        "paragraphs": [
          "Set a maximum number of messages and a minimum wait between them. Define the stop conditions: a reply, a purchase, an opt-out, a support issue, or a change in the customer's status. The sequence should stop immediately when the condition is met, not after the next scheduled send.",
          "Test the opt-out link and the preference center. Confirm that a request to stop is honored across all sending systems, not only the one used for the sequence. If a customer replies with a question, route it to a human rather than continuing the automated flow. A reply is a signal, not an obstacle."
        ]
      },
      {
        "heading": "4. Measure the sequence against the customer's experience",
        "paragraphs": [
          "Track delivered, opened, clicked, replied, converted, unsubscribed, and complained. Pair the rates with the number of messages per customer. A high click rate from a sequence that annoys the audience is not a win. Review a sample of replies for confusion, frustration, or unanswered questions.",
          "After the first cycle, remove the messages that do not earn their place. Shorten the sequence rather than adding more reminders. Update the audience rules and the stop conditions. The best sequence is often the one that knows when to end."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a VA send marketing email?",
        "answer": "Only with an approved list, a lawful permission basis, an unsubscribe path, and content approved by the owner."
      },
      {
        "question": "How many follow-ups are acceptable?",
        "answer": "There is no universal number. Use the minimum needed for the purpose, with a clear stop rule and a frequency the audience would recognize as reasonable."
      },
      {
        "question": "What happens when a customer replies?",
        "answer": "Stop the automated sequence and route the reply to a person. A reply is not permission to keep sending."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "english-writing-quality-check-for-va-replies",
    "title": "A Practical English Writing Check for VA Replies",
    "description": "Clarity, tone, and accuracy are separate checks. Use a short rubric and an escalation rule for ambiguous requests.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/english-writing-quality-check-for-va-replies.webp",
      "alt": "A Practical English Writing Check for VA Replies"
    },
    "source": "https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/",
    "introduction": [
      "A VA does not need a perfect accent or a literary style to write well for customers. The work requires clear structure, accurate facts, a respectful tone, and the judgment to stop when a request is ambiguous. Those are teachable and reviewable skills.",
      "Use a short checklist before any customer-facing message leaves the queue. The checklist should be part of the review, not a poster on the wall. The assistant should be able to show which items were checked and where the source for each factual claim lives."
    ],
    "sections": [
      {
        "heading": "1. Check the structure first",
        "paragraphs": [
          "Does the message answer the customer's question in the first two sentences? Does it state what happens next and who will do it? Does it include a date or a clear expectation? If the customer has to read three paragraphs to find the answer, rewrite the opening.",
          "Use short paragraphs and a logical order: acknowledge, answer, next step, and close. Avoid jargon and internal codes. If a technical term is necessary, explain it once. A customer who is upset needs a calm, direct message more than a polished paragraph."
        ]
      },
      {
        "heading": "2. Check the facts and the source",
        "paragraphs": [
          "Every price, date, policy, and product claim should come from an approved source. If the source is unclear, the message should say what is known and what is being checked. Do not fill a gap with a plausible detail. The assistant should link or reference the source in the internal note.",
          "Check names, numbers, and links before sending. A wrong order number or a broken link creates a second contact. If the message includes an attachment, confirm the file name and the access permissions. Do not send a document that contains another customer's data."
        ]
      },
      {
        "heading": "3. Check the tone and the boundary",
        "paragraphs": [
          "The tone should match the relationship and the situation. A routine update can be brief. A complaint needs acknowledgment without admitting fault the company has not confirmed. A sensitive request needs a named owner. The assistant should not apologize for a policy it cannot change or promise an outcome it cannot authorize.",
          "Read the message as if you were the customer. Would you know what to do next? Would you feel respected? Is there a sentence that could be read as a commitment? If yes, revise it or route it. The assistant's authority ends where the company's commitment begins."
        ]
      },
      {
        "heading": "4. Review a sample and coach one thing",
        "paragraphs": [
          "Each week, review a small sample of sent messages against the checklist. Look for patterns: unclear openings, missing next steps, unsupported claims, or tone problems in a specific situation. Choose one correction for the next week rather than a long list.",
          "Keep the reviewed examples in a private coaching file, not a public channel. Update the template or the source when the same issue appears across the team. The goal is not to make every message sound the same. It is to make every message accurate, clear, and safe."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How can we assess English writing?",
        "answer": "Use a short, role-relevant writing sample scored on clarity, accuracy, structure, and boundary awareness. Do not rely on accent or small talk."
      },
      {
        "question": "Should every message be reviewed?",
        "answer": "No. Review more heavily during onboarding and for sensitive lanes, then move to a risk-weighted sample when the evidence supports it."
      },
      {
        "question": "What should a VA do when a request is ambiguous?",
        "answer": "Ask a focused clarifying question or route it to the owner. Do not guess at a commitment or a sensitive detail."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  },
  {
    "slug": "a-30-day-trial-scorecard-for-a-philippines-va",
    "title": "A 30 Day Trial Scorecard for a Philippines VA",
    "description": "Measure evidence, not enthusiasm. Use four checkpoints, a small rubric, and a decision that expands one lane at a time.",
    "published": "2026-10-22",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/a-30-day-trial-scorecard-for-a-philippines-va.webp",
      "alt": "A 30 Day Trial Scorecard for a Philippines VA"
    },
    "source": "https://www.ilo.org/data",
    "introduction": [
      "A trial period is useful when it produces evidence about the work, not just a feeling about the person. A VA who is pleasant on calls but misses source checks is not ready for more authority. A VA who is quiet but accurate may be exactly what the queue needs.",
      "Build the scorecard before the trial starts. Use the real task lane, the real tools, and a reviewer who can compare the work with the standard. Keep the number of criteria small enough to apply consistently. The decision at day 30 should be expand, continue with a narrower lane, or stop."
    ],
    "sections": [
      {
        "heading": "1. Set four checkpoints",
        "paragraphs": [
          "Week one is orientation: can the VA explain the lane, find the sources, and recognize a stop? Week two is supervised work: can they complete routine tasks with review? Week three is gated independence: can they handle the queue with a sample check and a clear exception route? Week four is an independent sample: does the work meet the standard without line-by-line correction?",
          "Each checkpoint needs a different evidence set. Do not use the same ticket count for all four. Record the review intensity, the error types, and the questions the VA asked. A question that repeats may indicate a missing rule, not a weak hire. The checkpoint should test the system as well as the person."
        ]
      },
      {
        "heading": "2. Use a small, observable rubric",
        "paragraphs": [
          "Four criteria are enough for most lanes: accuracy, source and evidence use, boundary compliance, and communication. For each, write what a pass looks like and what a fail looks like. Cite the specific record. A score without evidence is an opinion.",
          "Include a correct stop as a pass. If the VA refuses an unverified reset or routes a refund without approval, that is the behavior you want. A scorecard that rewards only speed and closure will teach the wrong lesson. Review the adverse cases deliberately."
        ]
      },
      {
        "heading": "3. Separate person, process, and product",
        "paragraphs": [
          "A missed source may be a training issue, a broken link, or a source that no longer exists. A slow response may be an access problem or a queue design problem. Classify the cause before deciding on coaching. The trial should improve the brief as well as the VA.",
          "Keep a short log of the changes made during the trial: a new template, a clarified rule, a permission added, a source updated. At day 30, review whether those changes improved the evidence. If the same failure persists after the repair, the fit may be wrong."
        ]
      },
      {
        "heading": "4. Make the day 30 decision explicit",
        "paragraphs": [
          "Meet with the VA, the reviewer, and the business owner. Review the four checkpoints, the sample, the error pattern, and the changes made. Decide whether to expand, continue with a narrower lane, or stop. Record the reason and the next review date.",
          "If the decision is to expand, add one lane and keep a review gate. If the decision is to continue narrowly, state what evidence would support expansion. If the decision is to stop, follow the contract and the offboarding checklist. A clear decision is fairer than a trial that drifts without feedback."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many tasks should a trial cover?",
        "answer": "Start with one stable lane. Add a second only after the first produces accepted evidence and the reviewer can support the additional review load."
      },
      {
        "question": "Should the trial be paid?",
        "answer": "Yes. A trial that performs real work should be paid under the applicable agreement and local requirements."
      },
      {
        "question": "What if the VA is strong but slow?",
        "answer": "Check whether the delay comes from tooling, unclear rules, or review bottlenecks before treating it as a performance issue. Speed usually improves after the lane is stable."
      }
    ],
    "relatedSlugs": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ]
  }
] as const;
export type October22BlogPost=(typeof october22BlogPosts)[number];
export const findOctober22BlogPost=(slug:string)=>october22BlogPosts.find(post=>post.slug===slug);
export const october22BlogMetadata=(post:October22BlogPost):Metadata=>({title:post.title,description:post.description,alternates:{canonical:`${site}/blog/${post.slug}`},openGraph:{title:post.title,description:post.description,url:`${site}/blog/${post.slug}`,type:'article',publishedTime:post.published,images:[{url:`${site}${post.image.src}`,alt:post.image.alt}]}});
export function October22BlogArticle({post}:{post:October22BlogPost}){const canonical=`${site}/blog/${post.slug}`;return <><Header/><main className="fleet-main"><article className="section article-shell"><JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:post.title,description:post.description,datePublished:post.published,dateModified:post.published,mainEntityOfPage:canonical,image:`${site}${post.image.src}`,citation:[post.source]}}/><p className="eyebrow">Philippines staffing guide · Published <time dateTime={post.published}>{formatDate(post.published)}</time></p><h1>{post.title}</h1><p className="lead">{post.description}</p><img src={post.image.src} alt={post.image.alt} className="article-image"/><details className="oct22-mobile-toc"><summary>On this page</summary><nav>{post.sections.map(section=>{const id=section.heading.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");return <a key={id} href={`#${id}`}>{section.heading}</a>})}</nav></details><div className="oct22-layout"><div className="oct22-body">{post.introduction.map((paragraph,index)=><p key={index}>{paragraph}</p>)}{post.sections.map(section=><section key={section.heading}><h2 id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}>{section.heading}</h2>{section.paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</section>)}<section><h2 id="questions">Questions and operating boundary</h2>{post.faqs.map(faq=><div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section><aside className="fleet-card"><h2>Related guides</h2>{post.relatedSlugs.map(slug=>{const related=october22BlogPosts.find(item=>item.slug===slug);return related?<p key={slug}><a href={`/blog/${slug}`}>{related.title}</a></p>:null})}</aside><section><h2 id="source">Source</h2><p><a href={post.source}>{new URL(post.source).hostname.replace(/^www\./,'')}</a> provides authoritative background and does not endorse this service.</p></section></div><aside className="oct22-side" aria-label="Article sidebar"><nav aria-label="Table of contents"><p className="eyebrow">On this page</p>{post.sections.map(section=>{const id=section.heading.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");return <a key={id} href={`#${id}`}>{section.heading}</a>})}<a href="#questions">Questions and operating boundary</a><a href="#source">Source</a></nav></aside></div><p><a href="/services">Explore services</a> · <a href="/blog">Browse guides</a> · <a href="/contact">Plan a controlled lane</a></p></article><CTA/></main><Footer/></>}
