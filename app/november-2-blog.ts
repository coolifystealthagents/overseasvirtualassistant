// Drop-in blog module for coolifystealthagents/overseasvirtualassistant.
// Five source-bounded guides dated 2026-11-02.
export const november2BlogPosts = [
  {
    "slug": "overseasvirtualassistant-inbox-routing-rule-change-log",
    "title": "Keep an inbox routing rule change log",
    "description": "A source-bounded guide for business owners delegating an inbox: record rule changes, test their effect, and keep decisions with the owner.",
    "published": "2026-11-02",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/overseasvirtualassistant-inbox-routing-rule-change-log.png",
      "alt": "Keep an inbox routing rule change log"
    },
    "source": "https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees",
    "introduction": [
      "An inbox routing rule looks small until it sends a customer message to the wrong queue or quietly stops applying. The change log exists so a delegated assistant can explain what the rule did on a given day without relying on memory.",
      "This guide treats routing as a controlled operating lane: one rule version, one owner, one test, and one place where the effect is confirmed."
    ],
    "sections": [
      {
        "heading": "Name the rule and the person who can change it",
        "paragraphs": [
          "Write each routing rule as a short statement with a trigger, a destination, and an exception path. Give it an identifier and a version. Name the owner who can approve a change; an assistant may propose a change but should not alter a live rule that affects customer commitments, billing, or employee matters.",
          "The owner does not have to approve every typo fix, but the boundary should be explicit. A rule that routes refund requests, legal notices, or safety complaints needs a higher approval level than a newsletter filing rule. Put that level in the log so the next person does not have to guess."
        ]
      },
      {
        "heading": "Record the rule as it existed, not as it reads today",
        "paragraphs": [
          "When a rule changes, preserve the old version with its effective time and the reason for the change. Do not overwrite the earlier definition. A later reviewer should be able to see which rule was live when a specific message was routed.",
          "Capture the trigger, destination, priority, exceptions, and the systems where the rule runs. If the rule exists in more than one place, record each location and the person who keeps them aligned. A rule that is documented in a note but implemented differently in the mail tool is a conflict, not a source of truth."
        ]
      },
      {
        "heading": "Test a change on a small set before it goes live",
        "paragraphs": [
          "Build a test set that includes an ordinary message, a message from an unknown sender, a message with an attachment, a message that matches two rules, and a message that should match none. Predict the destination before running the test, then compare the actual result.",
          "Record the test date, the rule version, the examples used, and the results. Use synthetic or properly protected messages rather than live customer mail. If the rule fails, keep the failed result and the correction; a clean test log that hides the failed attempt is less useful than an honest one."
        ]
      },
      {
        "heading": "Separate sorting from deciding",
        "paragraphs": [
          "An assistant can apply a rule, label a message, and route it to a named queue. The assistant should not decide whether a customer is entitled to a refund, whether a contract notice is valid, or whether a message creates a legal deadline. Those decisions stay with the owner who is authorized to make them.",
          "Write the boundary into the rule. If a message matches a sensitive category, the rule should route it with a neutral label and a request for owner review, not with a disposition. A neutral label such as needs owner review is safer than a conclusion such as approved or resolved."
        ]
      },
      {
        "heading": "Watch for silent drift",
        "paragraphs": [
          "Rules drift when a mailbox is renamed, a sender address changes, or a new message type appears. Review the rule against actual traffic on a fixed cadence. Count messages that matched no rule and messages that were manually rerouted, because both can reveal a gap.",
          "Do not treat a low exception count as proof that the rule works. The team may be quietly fixing misroutes without logging them. Ask for the manual corrections and add them to the review. A rule that depends on private repair is not stable."
        ]
      },
      {
        "heading": "Close the change with evidence and a review date",
        "paragraphs": [
          "After a change goes live, confirm that the destination queue received a test message and that the old rule no longer applies. Record the confirmation, the person who checked it, and the time. If the change affects a customer-facing response, verify that the approved response text is also current.",
          "Set a review date and an owner. At the review, sample routed messages, check the exception log, and decide whether to keep, revise, or retire the rule. Retiring a rule is a change too, and it needs the same record so a later reader does not assume the route still exists."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a virtual assistant change an inbox rule without approval?",
        "answer": "Only within a written boundary. Rules that affect customers, money, legal notices, employment, or security need the named owner's approval."
      },
      {
        "question": "What should a change log contain?",
        "answer": "The rule identifier, old and new versions, effective time, reason, approver, test examples, observed result, and next review date."
      },
      {
        "question": "How do we find silent misroutes?",
        "answer": "Compare routed messages with the rule, count unmatched messages, and collect the manual corrections the team makes without logging them."
      },
      {
        "question": "When should a rule be retired?",
        "answer": "When the trigger, destination, or business process no longer exists. Record the retirement and confirm that the old route is no longer reachable."
      }
    ],
    "relatedSlugs": [
      "overseasvirtualassistant-travel-booking-change-custody",
      "overseasvirtualassistant-crm-data-cleanup-boundaries"
    ]
  },
  {
    "slug": "overseasvirtualassistant-travel-booking-change-custody",
    "title": "Preserve travel booking change custody",
    "description": "A practical guide to delegated travel changes: approved options, versioned itineraries, payment boundaries, and a verified close with the traveler.",
    "published": "2026-11-02",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/overseasvirtualassistant-travel-booking-change-custody.png",
      "alt": "Preserve travel booking change custody"
    },
    "source": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
    "introduction": [
      "A travel booking changes several times before departure: a seat, a date, a hotel, a ground transfer. Each change creates a new version and a new commitment. Delegated support needs a custody trail so the traveler and the finance owner can see what was approved.",
      "The assistant can compare options and prepare changes. The traveler and the company owner keep the decisions about cost, policy, and personal preference."
    ],
    "sections": [
      {
        "heading": "Start from the approved trip record",
        "paragraphs": [
          "Open the trip record with the traveler, the purpose, the approved dates, the origin and destination, and the budget or policy that applies. Record the approval reference and the person who gave it. A forwarded confirmation is not the approval record, even when it contains the same dates.",
          "Keep personal preferences separate from policy requirements. A seat preference is not a policy exception, and a policy limit is not a suggestion. If the traveler asks for something outside the approved policy, route the request to the owner rather than booking it and explaining later."
        ]
      },
      {
        "heading": "Compare options on the approved criteria",
        "paragraphs": [
          "Use the criteria the company has supplied: total cost, arrival window, refundability, baggage, and any duty-of-care requirement. Record the source and retrieval time for each option. Do not rank options by a preference the traveler did not state or by a commission the company did not approve.",
          "Present a short comparison with the trade-offs visible. State which option fits the policy and which requires an exception. The assistant may recommend an option only if the company has authorized recommendations; otherwise the output is a neutral comparison with a named decision owner."
        ]
      },
      {
        "heading": "Version every change before it is ticketed",
        "paragraphs": [
          "When an itinerary changes, preserve the prior version and create a new one with the change reason, the requester, the approval, and the price difference. Do not edit the old confirmation. The version history is what lets finance reconcile the final cost and what lets the traveler see what moved.",
          "If a supplier changes a schedule without a request from the company, record the supplier notice and the new itinerary separately from an elective change. The two have different approval and cost consequences. A missed connection caused by a supplier schedule change should not be recorded as a traveler-requested modification."
        ]
      },
      {
        "heading": "Keep payment and personal data inside the boundary",
        "paragraphs": [
          "Use the approved payment method and never store full card details in a note, chat, or spreadsheet. If the booking tool requires a card, follow the company's tokenized or delegated payment process. Record only the last four digits or the payment reference that the policy permits.",
          "Travel records can include passport numbers, dates of birth, and medical or accessibility information. Collect only what the booking requires, restrict access, and avoid copying the documents into general channels. If a supplier asks for more than the policy allows, stop and route the request."
        ]
      },
      {
        "heading": "Handle disruption with a named owner",
        "paragraphs": [
          "When a flight is cancelled or a hotel cannot honor a reservation, the assistant can gather the supplier notice, the available alternatives, and the cost difference. The assistant should not commit to a rebooking that exceeds the approved budget or changes the trip purpose.",
          "Record the time of the disruption, the options offered, the traveler's stated need, the owner's decision, and the final booking. If the traveler is unreachable, follow the company's emergency instruction rather than making an independent commitment. Speed matters, but an unauthorized commitment can be harder to unwind than a short delay."
        ]
      },
      {
        "heading": "Close with traveler and finance confirmation",
        "paragraphs": [
          "Close the trip by confirming the final itinerary with the traveler, reconciling the charged amount against the approved budget, and recording any unused or refundable value. Attach the supplier confirmation and the approval for each exception.",
          "Verify that the traveler received the final documents and that the finance record matches the booking. If the traveler changes the trip after close, reopen the record rather than editing the closed version. A custody trail is only useful if the final state and the reason for each change remain visible."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can the assistant book the cheapest option without asking?",
        "answer": "Only if the company has authorized that rule and the option fits the approved policy. Cost alone does not settle refundability, arrival time, or duty-of-care requirements."
      },
      {
        "question": "How should card details be handled?",
        "answer": "Use the approved payment process and store only the reference the policy permits. Never place full card details in chat, notes, or a spreadsheet."
      },
      {
        "question": "What if the traveler asks for a policy exception?",
        "answer": "Route the request to the named owner with the cost and schedule difference. Do not book the exception and seek approval afterward."
      },
      {
        "question": "What belongs in the trip close?",
        "answer": "The final itinerary, traveler confirmation, reconciled cost, exception approvals, supplier references, and any unused or refundable value."
      }
    ],
    "relatedSlugs": [
      "overseasvirtualassistant-inbox-routing-rule-change-log",
      "overseasvirtualassistant-crm-data-cleanup-boundaries"
    ]
  },
  {
    "slug": "overseasvirtualassistant-crm-data-cleanup-boundaries",
    "title": "Set boundaries for CRM data cleanup",
    "description": "A delegated cleanup workflow that fixes formatting and duplicates without letting an assistant overwrite ownership, consent, or commercial terms.",
    "published": "2026-11-02",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/overseasvirtualassistant-crm-data-cleanup-boundaries.png",
      "alt": "Set boundaries for CRM data cleanup"
    },
    "source": "https://www.nist.gov/privacy-framework",
    "introduction": [
      "CRM cleanup is often handed over as a list of records to fix. The work looks clerical until a merge changes an owner, a consent flag, or a deal amount. A bounded cleanup lane separates safe normalization from decisions the business must make.",
      "The assistant can standardize formats, flag duplicates, and prepare a merge proposal. The CRM owner keeps the decisions about identity, consent, ownership, and revenue."
    ],
    "sections": [
      {
        "heading": "Define the safe field set",
        "paragraphs": [
          "List the fields the assistant may normalize: capitalization, spacing, country and state formats, phone formatting, job-title cleanup, and empty-field detection. Exclude fields that carry legal, consent, ownership, pricing, or forecasting meaning unless the company has explicitly approved a rule.",
          "Record the field-level permission in the cleanup brief. A field that looks like text may still be a controlled picklist. Changing a picklist value can move a record into a different report, so the assistant should not add new values without approval."
        ]
      },
      {
        "heading": "Detect duplicates before merging anything",
        "paragraphs": [
          "Build duplicate groups using the keys the company approves: email domain, normalized company name, phone, tax identifier, or a combination. Record which key produced each group and the confidence rule. A group is a proposal, not a merge.",
          "Keep every record in the group visible with its source, last activity, owner, and open opportunities. The assistant should not choose the surviving record when the choice affects ownership or revenue. Prepare a neutral comparison and route the merge decision to the CRM owner."
        ]
      },
      {
        "heading": "Preserve history and attribution",
        "paragraphs": [
          "Before any merge, export the fields and activity history that will be affected. Record the source record, the target record, the fields that will be kept, and the fields that will be discarded. If the CRM cannot preserve the history, stop and ask the owner whether the merge should proceed.",
          "Never rewrite the created date, original source, or campaign attribution to make a record look cleaner. Those fields may be used for commission, reporting, or consent history. A cleanup that improves formatting but destroys attribution creates a different problem than the one it solved."
        ]
      },
      {
        "heading": "Keep consent and communication state untouched",
        "paragraphs": [
          "Consent, opt-out, and communication preferences are not formatting fields. Do not infer consent from a previous purchase or from an email reply. If a record has conflicting consent values, preserve both and route the conflict to the owner who can resolve it under the company's policy.",
          "Suppression and do-not-contact flags need the same care. A cleanup that removes a suppression because the record looks stale can create a legal and reputational risk. Mark the conflict and stop rather than choosing the value that makes the list larger."
        ]
      },
      {
        "heading": "Test on a protected sample",
        "paragraphs": [
          "Clean a small sample in a sandbox or with a reversible change set. Include a record with an open deal, a record with a recent complaint, a duplicate with different owners, and a record with a missing consent value. Predict the result before running the change.",
          "Record the test records, the rule version, the result, and any unintended change. If the test shows that a merge would alter an owner or an open opportunity, revise the rule and rerun. Do not expand to the full file until the sample passes and the owner accepts the approach."
        ]
      },
      {
        "heading": "Close with a reconciliation and a rollback note",
        "paragraphs": [
          "After the approved changes, reconcile record counts, owner assignments, open opportunities, consent values, and suppression flags against the pre-change export. Report what changed and what did not. A count of cleaned records is not enough if the reconciliation misses a changed owner.",
          "Keep the pre-change export and a rollback note for the period the company requires. Record who approved the change, the rule version, the date, and the sample evidence. If the CRM cannot support rollback, the owner should decide whether the change is worth the risk before it runs."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can an assistant merge duplicate CRM records?",
        "answer": "Only if the company has approved the merge rule and the merge does not change ownership, consent, or revenue fields without an owner decision."
      },
      {
        "question": "Which fields are unsafe to normalize?",
        "answer": "Consent, opt-out, suppression, owner, stage, amount, close date, and any field that drives reporting or legal obligations."
      },
      {
        "question": "What if two records have different consent values?",
        "answer": "Preserve both values, mark the conflict, and route it to the owner. Do not infer consent from activity or choose the value that allows more contact."
      },
      {
        "question": "What evidence should the cleanup leave?",
        "answer": "The pre-change export, rule version, sample results, approvals, reconciliation counts, and a rollback note."
      }
    ],
    "relatedSlugs": [
      "overseasvirtualassistant-inbox-routing-rule-change-log",
      "overseasvirtualassistant-travel-booking-change-custody"
    ]
  },
  {
    "slug": "overseasvirtualassistant-month-end-reporting-checklist",
    "title": "Run a month-end reporting checklist with evidence",
    "description": "A repeatable month-end reporting routine for delegated support, with source cutoffs, reconciliation, and a clear owner sign-off.",
    "published": "2026-11-02",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/overseasvirtualassistant-month-end-reporting-checklist.png",
      "alt": "Run a month-end reporting checklist with evidence"
    },
    "source": "https://www.gao.gov/products/gao-20-283g",
    "introduction": [
      "Month-end reporting fails quietly when a source is refreshed late, a manual adjustment is missed, or a number is copied from the wrong tab. A delegated assistant can run the checklist, but the business owner still signs off on the result.",
      "This guide sets out a evidence-first routine: freeze the sources, reconcile the totals, document the exceptions, and verify the delivered report."
    ],
    "sections": [
      {
        "heading": "Freeze the reporting calendar and source cutoff",
        "paragraphs": [
          "Write down the report date, the period covered, the systems included, and the exact cutoff time for each source. A report built at 9 a.m. from a system refreshed at 10 a.m. is not the same report. Record the extraction time and the filter used.",
          "Name the person who confirms that the cutoff has passed. If a source is late, mark the report as provisional rather than filling the gap from memory. Provisional is an honest state; a silently patched number is not."
        ]
      },
      {
        "heading": "Reconcile each total to a source",
        "paragraphs": [
          "For every headline number, keep a link to the source report, the query or filter, and the calculation. Recompute at least one total independently. If the number comes from a spreadsheet, check that the formula still covers the right rows and that hidden rows are not excluded.",
          "Compare the result with the prior period and with any related report that should agree. A difference is not automatically an error, but it needs an explanation. Record the explanation and the person who supplied it; do not smooth the variance away."
        ]
      },
      {
        "heading": "Document manual adjustments separately",
        "paragraphs": [
          "List every manual adjustment with the amount, the reason, the source, the approver, and the date. Keep adjustments in a separate section so a reader can see the reported total and the unadjusted total. An adjustment buried inside a formula is hard to review and easy to repeat by mistake.",
          "If an adjustment is recurring, ask whether it should become part of the standard process. A recurring manual fix may indicate a mapping error or a missing field. Record the question and route it to the report owner rather than normalizing the workaround."
        ]
      },
      {
        "heading": "Check the narrative against the numbers",
        "paragraphs": [
          "Read the commentary after the numbers are reconciled. Every statement about growth, decline, or cause should be supported by the data or clearly labeled as an interpretation. Remove claims that the report cannot support, even if they sound more decisive.",
          "Keep the owner's explanation separate from the assistant's summary. The assistant can describe what moved and by how much; the owner decides what it means for the business. A neutral description is easier to correct than a confident story."
        ]
      },
      {
        "heading": "Deliver to the named recipients and verify receipt",
        "paragraphs": [
          "Use the approved distribution list and channel. Record who received the report, when, and in what format. If the report contains sensitive financial or employee data, use the approved access method rather than attaching it to a general message.",
          "Confirm that the recipient can open the report and that the version matches the one that was reconciled. A sent message is not proof of delivery. If a recipient reports a missing page or a different total, reopen the report and correct the source rather than sending a second unsupported version."
        ]
      },
      {
        "heading": "Close with a sign-off and a next-period note",
        "paragraphs": [
          "Close the cycle when the owner signs off on the reconciled report, the exceptions are documented, and the distribution is confirmed. Record the sign-off time and any conditions attached to it.",
          "Leave a short note for the next cycle: late sources, recurring adjustments, unresolved mapping questions, and the date of the next cutoff. That note is more useful than a clean-looking archive because it tells the next person where the report is fragile."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can the assistant sign off on the month-end report?",
        "answer": "No. The assistant can reconcile and prepare the report. The named business owner signs off on the result and its interpretation."
      },
      {
        "question": "What if a source is not ready by the cutoff?",
        "answer": "Mark the report as provisional, record the missing source, and route the decision to the owner. Do not fill the gap with an estimate presented as actual."
      },
      {
        "question": "How should manual adjustments be shown?",
        "answer": "List them separately with amount, reason, source, approver, and date so the reader can see both the adjusted and unadjusted totals."
      },
      {
        "question": "What belongs in the next-period note?",
        "answer": "Late sources, recurring adjustments, unresolved mapping questions, and the next cutoff date."
      }
    ],
    "relatedSlugs": [
      "overseasvirtualassistant-inbox-routing-rule-change-log",
      "overseasvirtualassistant-travel-booking-change-custody"
    ]
  },
  {
    "slug": "overseasvirtualassistant-vendor-invoice-intake-boundary",
    "title": "Bound vendor invoice intake for a virtual assistant",
    "description": "An invoice intake lane that captures, validates, and routes vendor bills without letting an assistant approve payment or change bank details.",
    "published": "2026-11-02",
    "service": "/services",
    "image": {
      "src": "/images/thumbnails/generated/overseasvirtualassistant-vendor-invoice-intake-boundary.png",
      "alt": "Bound vendor invoice intake for a virtual assistant"
    },
    "source": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
    "introduction": [
      "Vendor invoice intake is a high-value target for fraud because a small change to a bank field can redirect a payment. Delegated support can capture and validate invoices, but the approval and bank-detail changes must stay with the finance owner.",
      "This guide defines the intake states, the evidence to preserve, and the stop rules that keep a helpful assistant from becoming an unauthorized payment channel."
    ],
    "sections": [
      {
        "heading": "Open one intake record per invoice",
        "paragraphs": [
          "Create a record with the vendor, invoice number, invoice date, amount, currency, purchase order or contract reference, and the receiving business owner. Attach the original invoice file and record how it arrived. A forwarded copy is not the original when the original is available.",
          "Check for duplicates before doing anything else. Compare the vendor, invoice number, amount, and date against recent records. If a duplicate is possible, mark it and route the question rather than processing both. Duplicate payment is a common and expensive failure."
        ]
      },
      {
        "heading": "Validate against the approved source",
        "paragraphs": [
          "Compare the invoice with the purchase order, contract, or approved rate card. Record the matched fields and the differences. If the invoice includes items that are not on the order, mark the variance and route it to the business owner; do not assume the extra item was approved.",
          "Check the math, tax treatment, and currency. Use the company's approved tax and conversion rules. If a rule is missing or ambiguous, stop and ask. An assistant should not invent a tax rate or choose a conversion date that makes the invoice balance."
        ]
      },
      {
        "heading": "Treat bank-detail changes as a separate control",
        "paragraphs": [
          "Never update a vendor's bank details from an email alone. Require the company's approved verification step, which may include a call to a known contact, a signed form, or a portal confirmation. Record who verified the change and when.",
          "If a vendor asks to change bank details on an open invoice, stop the payment path and route the request to the finance owner. Preserve the request, the old details, and the new details. A sense of urgency in the message is a reason for more verification, not less."
        ]
      },
      {
        "heading": "Keep approval and payment separate from intake",
        "paragraphs": [
          "The assistant may prepare the packet and route it to the approver. The assistant may not approve the invoice, release a payment, or tell the vendor that payment has been scheduled unless the company has explicitly authorized that communication.",
          "Record the approver's decision, the approved amount, and any conditions. If the approved amount differs from the invoice, keep both values and route the difference. Do not edit the invoice to match the approval; the discrepancy may be the evidence the owner needs."
        ]
      },
      {
        "heading": "Use consistent states and reason codes",
        "paragraphs": [
          "Define a small set of intake states: received, duplicate suspected, missing reference, variance, bank change pending, approved for payment, rejected, and closed. Each state should have a next action and an owner. Avoid vague states such as in review that can hide an item for weeks.",
          "Use reason codes that point to the actual problem: missing purchase order, amount mismatch, unverified bank change, tax question, or vendor identity conflict. A code should route the case to a team that can resolve it, not just label it as an exception."
        ]
      },
      {
        "heading": "Close with payment and vendor confirmation evidence",
        "paragraphs": [
          "After payment, verify that the amount, currency, and vendor match the approved packet. Record the payment reference and date. If the payment fails or is returned, reopen the record rather than creating a new one without the history.",
          "Confirm the vendor's receipt only through the approved channel and only when the company has authorized that contact. Close the record when the payment, approval, and vendor reference reconcile. Report open items by age and reason so the finance owner can see what is waiting."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can the assistant approve an invoice?",
        "answer": "No. The assistant captures, validates, and routes the invoice. The named finance owner approves payment."
      },
      {
        "question": "What should happen when bank details change?",
        "answer": "Stop the payment path and follow the company's verification process. An email request alone is not sufficient verification."
      },
      {
        "question": "How should duplicates be handled?",
        "answer": "Mark the possible duplicate, preserve both records, and route the question. Do not process both invoices while the duplicate is unresolved."
      },
      {
        "question": "What if the invoice amount differs from the purchase order?",
        "answer": "Record both values, identify the variance, and route it to the business owner. Do not edit the invoice to match the order."
      }
    ],
    "relatedSlugs": [
      "overseasvirtualassistant-inbox-routing-rule-change-log",
      "overseasvirtualassistant-travel-booking-change-custody"
    ]
  }
];

export type November2BlogPost = (typeof november2BlogPosts)[number];
export const findNovember2BlogPost = (slug: string) => november2BlogPosts.find((post) => post.slug === slug);
