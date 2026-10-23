import type { ResearchPost } from './data';
export const october22ResearchPosts = [
  {
    "slug": "va-task-scope-clarity-method",
    "title": "A Method for Testing VA Task Scope Clarity",
    "excerpt": "A bounded protocol for measuring whether a written task brief lets two reviewers reach the same permitted action and stop point.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "methodology": "Bounded method review with 4 authoritative sources, 6 analysis sections, and 0 service performance claims.",
    "headlineStat": {
      "value": "4",
      "label": "authoritative sources reviewed",
      "source": "Declared protocol and source register"
    },
    "keyStats": [
      {
        "value": "4",
        "label": "authoritative sources"
      },
      {
        "value": "6",
        "label": "analysis sections"
      },
      {
        "value": "0",
        "label": "service performance claims"
      }
    ],
    "takeaways": [
      "Define the unit and the decision",
      "Ask for the action and the stop",
      "Analyze the ambiguity"
    ],
    "sections": [
      {
        "heading": "Define the unit and the decision",
        "body": "The unit is one task brief and one realistic case. The decision is whether the brief gives a competent reader enough information to act safely without asking the owner. Freeze the brief version, the tools, the authority level, and the case set before the review. Do not change the brief in the middle of the test.\n\nSelect cases that represent the lane: a routine request, a missing field, a conflicting record, an unavailable owner, a request outside the lane, and a sensitive exception. The cases should be synthetic or properly protected. The reviewer should see only what the real role would see.",
        "table": []
      },
      {
        "heading": "Ask for the action and the stop",
        "body": "For each case, ask the reviewer to state the customer goal, the verified facts, the permitted next action, the evidence to record, the stop condition, and the destination owner. Compare the answers across two reviewers. Agreement on the action is not enough if they disagree on when to stop.\n\nScore each element separately: identifiable source, permitted action, evidence fields, authority boundary, escalation route, and completion test. A brief that is clear on the routine path but silent on the exception is incomplete. The exception is where the risk lives.",
        "table": []
      },
      {
        "heading": "Analyze the ambiguity",
        "body": "Group disagreements by cause: missing definition, conflicting instruction, unavailable source, unclear owner, or absent completion test. A cluster of disagreements in one area points to a specific repair. Do not average the reviewers' answers or treat the majority as correct. The owner of the process decides the rule.\n\nRewrite the brief and repeat the test with new cases. Keep the original answers and the revised version. The improvement should be visible in the evidence, not only in the prose. If the second test still produces material disagreement, the process may need a different owner or a narrower scope.",
        "table": []
      },
      {
        "heading": "Evidence and reporting",
        "body": "Keep the brief version, the case set, the reviewer identities, and the first answers. Report agreement by element rather than as one score: source, action, evidence, authority, escalation, and completion. Show the cases where the reviewers disagreed and the owner's final rule. A short table is enough. The report should let a new manager see exactly which sentence caused confusion and what changed.\n\nDistinguish a brief defect from a tool or access defect. If the reviewer could not find the source because the link was broken, that is not an ambiguity in the instruction. If the owner was unavailable, that is a capacity issue. Route each cause to the person who can repair it, and retest the affected element rather than rewriting the whole brief.",
        "table": []
      },
      {
        "heading": "Limitations",
        "body": "The test uses a small case set and may not represent every real request. Reviewers may share a misunderstanding because they have the same background. The brief may be clear to an expert but not to a new hire. The method measures clarity for the declared role and cases, not universal comprehension.\n\nIt also cannot prove that the work is worth doing or that the authority level is appropriate. Those are management decisions. The protocol only shows whether the written design supports a consistent, safe action.",
        "table": []
      },
      {
        "heading": "Decision use",
        "body": "Use the result to decide whether the lane is ready for hiring, needs a rewrite, or should be split. A brief that passes can become the onboarding document and the basis for the trial scorecard. A brief that fails should not be used to judge a VA's performance.\n\nRepeat the test after a material change in tools, policy, customer segment, or authority. Keep the test record with the brief so the next owner can see what was ambiguous and how it was repaired. If the same ambiguity returns after a rewrite, the cause may be an unstated management preference rather than a missing sentence. Interview the owner, record the rule, and add it to the brief with an example. A brief that depends on private context will always fail a second-reader test.",
        "table": []
      }
    ],
    "sourceNotes": "Sources checked October 22, 2026. Method protocol only; no provider performance claim.",
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "International Labour Organization, Data",
        "url": "https://www.ilo.org/data",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "W3C Web Content Accessibility Guidelines 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Public guidance supporting the protocol."
      }
    ],
    "internalLinks": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ],
    "faqs": [],
    "relatedResearch": [
      "va-work-sample-scoring-validity",
      "inbox-triage-accuracy-method",
      "meeting-note-fidelity-method"
    ],
    "image": {
      "src": "/images/thumbnails/generated/va-task-scope-clarity-method.webp",
      "alt": "A Method for Testing VA Task Scope Clarity"
    },
    "cta": "Use the method to define the population, evidence, and reviewer before testing.",
    "serviceHandoff": {
      "href": "/services",
      "label": "Review virtual assistant services",
      "copy": "Translate the method into a bounded role brief with named review points."
    }
  },
  {
    "slug": "va-work-sample-scoring-validity",
    "title": "Checking Whether a VA Work Sample Scores the Right Thing",
    "excerpt": "A work sample can be realistic and still unreliable. Test the task, the rubric, and reviewer agreement before using it to hire.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "methodology": "Bounded method review with 4 authoritative sources, 6 analysis sections, and 0 service performance claims.",
    "headlineStat": {
      "value": "4",
      "label": "authoritative sources reviewed",
      "source": "Declared protocol and source register"
    },
    "keyStats": [
      {
        "value": "4",
        "label": "authoritative sources"
      },
      {
        "value": "6",
        "label": "analysis sections"
      },
      {
        "value": "0",
        "label": "service performance claims"
      }
    ],
    "takeaways": [
      "Name the construct",
      "Test the task with current staff",
      "Measure reviewer agreement"
    ],
    "sections": [
      {
        "heading": "Name the construct",
        "body": "Write down what the sample is meant to measure. Accuracy, source verification, customer writing, prioritization, and boundary awareness are different constructs. A single task can touch several, but the rubric should identify the primary one. If the role needs accuracy and speed, decide how a fast but wrong answer is scored.\n\nCheck that the task actually requires the construct. A spreadsheet with no discrepancies does not test verification. A customer email with no ambiguity does not test judgment. Add one deliberate missing fact or conflicting source, and observe whether the candidate stops or guesses.",
        "table": []
      },
      {
        "heading": "Test the task with current staff",
        "body": "Ask two experienced team members to complete the sample under the same conditions. Compare their outputs and their reasoning. If they disagree about what good looks like, the task or the instructions are ambiguous. Fix that before using the sample on candidates.\n\nCheck the time limit. A task that takes an experienced person twice the allotted time is not a fair sample. Check the tools and the data. A candidate should not be penalized for lacking a license or a device that the role does not require. Offer an equivalent format where needed.",
        "table": []
      },
      {
        "heading": "Measure reviewer agreement",
        "body": "Give two reviewers the same submissions and the rubric, and ask them to score independently. Compare exact agreement and agreement within one point. Discuss every disagreement and record whether the cause was the rubric, the evidence, or the reviewer's product knowledge.\n\nA rubric with vague words such as professional or proactive will produce low agreement. Replace them with observable criteria: the reply states the next action, cites the source, avoids an unsupported promise, and stops when approval is missing. Keep the initial scores so calibration does not erase the disagreement.",
        "table": []
      },
      {
        "heading": "Evidence and reporting",
        "body": "Keep the scored submissions, the rubric version, the reviewer notes, and the calibration record. Report the score distribution and the agreement result, not only the selected candidate's score. If the sample is used across roles, separate the results by role and by task. A sample that works for an inbox role may not work for a reporting role.\n\nState what the sample does not measure, such as long-term reliability, learning speed, or fit with a particular manager. Those require the trial and the review cadence. The hiring decision should combine the sample with the interview evidence and the reference check, not replace them.",
        "table": []
      },
      {
        "heading": "Limitations",
        "body": "A small hiring round cannot establish statistical validity. The sample measures performance under observation, which may differ from daily work. The rubric reflects the current standard, which may change. A candidate who performs well on a narrow task may still need support in the full lane.\n\nThe protocol also cannot eliminate bias in interviewing or evaluation. It can make the evidence more visible and the criteria more consistent. Use it as one input, not as a complete hiring decision.",
        "table": []
      },
      {
        "heading": "Decision use",
        "body": "If the sample is valid for the construct, keep the task and rubric stable across candidates. If it is not, revise the task or use the sample as a structured interview aid rather than a decisive score. Record what was learned from the first ninety days and update the sample for the next role.\n\nDo not reuse a candidate's work as production output without an agreement. Pay for substantive work that produces value. The hiring process is part of the employer's reputation. Keep the sample instructions and the scoring notes for the next hiring round, and review them with the hiring manager before the role opens. A sample that was fair in one market may create an unnecessary barrier in another if the instructions assume a tool, a currency, or a local convention that the job does not require.",
        "table": []
      }
    ],
    "sourceNotes": "Sources checked October 22, 2026. Method protocol only; no provider performance claim.",
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "International Labour Organization, Data",
        "url": "https://www.ilo.org/data",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "W3C Web Content Accessibility Guidelines 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "World Bank, Philippines Overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Public guidance supporting the protocol."
      }
    ],
    "internalLinks": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ],
    "faqs": [],
    "relatedResearch": [
      "va-task-scope-clarity-method",
      "inbox-triage-accuracy-method",
      "meeting-note-fidelity-method"
    ],
    "image": {
      "src": "/images/thumbnails/generated/va-work-sample-scoring-validity.webp",
      "alt": "Checking Whether a VA Work Sample Scores the Right Thing"
    },
    "cta": "Use the method to define the population, evidence, and reviewer before testing.",
    "serviceHandoff": {
      "href": "/services",
      "label": "Review virtual assistant services",
      "copy": "Translate the method into a bounded role brief with named review points."
    }
  },
  {
    "slug": "inbox-triage-accuracy-method",
    "title": "Measuring Inbox Triage Accuracy Without a Clean Baseline",
    "excerpt": "A practical protocol for classifying messages, testing priority decisions, and reporting accuracy with honest denominators.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "methodology": "Bounded method review with 4 authoritative sources, 6 analysis sections, and 0 service performance claims.",
    "headlineStat": {
      "value": "4",
      "label": "authoritative sources reviewed",
      "source": "Declared protocol and source register"
    },
    "keyStats": [
      {
        "value": "4",
        "label": "authoritative sources"
      },
      {
        "value": "6",
        "label": "analysis sections"
      },
      {
        "value": "0",
        "label": "service performance claims"
      }
    ],
    "takeaways": [
      "Build a small taxonomy",
      "Create a gold set",
      "Score the triage"
    ],
    "sections": [
      {
        "heading": "Build a small taxonomy",
        "body": "Use two dimensions: sender group and request type. Add a priority flag only for conditions that are defined in advance, such as a legal threat, a safety issue, a board deadline, or a payment failure. Keep the categories few enough that a reviewer can apply them consistently.\n\nWrite a definition and two examples for each category. Include the boundary cases: a vendor asking for a meeting is not a customer complaint; a newsletter with an urgent subject line is not urgent. The taxonomy should make the easy cases obvious and the hard cases discussable.",
        "table": []
      },
      {
        "heading": "Create a gold set",
        "body": "Have the executive or an experienced chief of staff classify a sample of real or realistic messages. Use that set as the reference, but review it for internal consistency. If the owner disagrees with their own earlier labels, the definition needs work.\n\nProtect the messages and remove unnecessary personal data. The gold set should be small enough to review and large enough to cover the main categories. Keep the source date and the taxonomy version. A gold set that changes every week cannot support a stable measure.",
        "table": []
      },
      {
        "heading": "Score the triage",
        "body": "Ask the VA to classify each message, choose the destination, and write a one-line reason. Score category accuracy, priority accuracy, destination accuracy, and the quality of the reason. A correct label with no reason is harder to review and easier to fake.\n\nReport confusion between categories, not only overall accuracy. If legal messages are often labeled as customer complaints, the fix is a definition and a training example. If urgent messages are under-flagged, the priority rule may be too vague. Use the error pattern to repair the taxonomy.",
        "table": []
      },
      {
        "heading": "Sampling and reporting",
        "body": "Report the sample size, the categories represented, the gold-set version, and the cases the reviewers could not classify. Show category-level confusion and the reason for each material error. A single accuracy percentage can hide a dangerous pattern, such as consistent under-flagging of legal or safety messages.\n\nRepeat the test with new messages after a taxonomy change. Keep the earlier results separate rather than pooling them with the new version. If the VA improves only on the familiar cases, the result may reflect memory rather than skill. Use fresh cases for the decision.",
        "table": []
      },
      {
        "heading": "Limitations",
        "body": "The gold set reflects one owner's judgment and may not generalize. A small sample can miss rare but important categories. The VA may improve because the test cases become familiar. Repeat with new cases and keep the old results separate.\n\nTriage accuracy also depends on the inbox design, the sender data, and the time available. A low score may indicate a broken intake rather than a weak assistant. Report the conditions beside the score.",
        "table": []
      },
      {
        "heading": "Decision use",
        "body": "Use the result to decide whether the VA can work the inbox with a sample review, needs a narrower set of sender groups, or should stay in a draft-only lane. Do not use a single accuracy percentage to make a broad claim about the person.\n\nRetest after a change in taxonomy, mailbox volume, or executive preferences. Keep the gold set and the scoring notes so the next reviewer can reproduce the measure. If the executive cannot agree with the gold labels, the issue may be a values conflict rather than a skill gap. Resolve the standard before scoring the assistant, and record the decision so the next reviewer is not asked to guess which version of the inbox rules applies.",
        "table": []
      }
    ],
    "sourceNotes": "Sources checked October 22, 2026. Method protocol only; no provider performance claim.",
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "W3C WAI, Use Clear and Understandable Content",
        "url": "https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "Google Site Reliability Engineering Workbook, Postmortem Culture",
        "url": "https://sre.google/workbook/postmortem-culture/",
        "note": "Public guidance supporting the protocol."
      }
    ],
    "internalLinks": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ],
    "faqs": [],
    "relatedResearch": [
      "va-task-scope-clarity-method",
      "va-work-sample-scoring-validity",
      "meeting-note-fidelity-method"
    ],
    "image": {
      "src": "/images/thumbnails/generated/inbox-triage-accuracy-method.webp",
      "alt": "Measuring Inbox Triage Accuracy Without a Clean Baseline"
    },
    "cta": "Use the method to define the population, evidence, and reviewer before testing.",
    "serviceHandoff": {
      "href": "/services",
      "label": "Review virtual assistant services",
      "copy": "Translate the method into a bounded role brief with named review points."
    }
  },
  {
    "slug": "meeting-note-fidelity-method",
    "title": "A Fidelity Test for Meeting Notes and Action Items",
    "excerpt": "Measure whether a note preserves the decision, the owner, the date, and the open question without adding invented certainty.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "methodology": "Bounded method review with 4 authoritative sources, 6 analysis sections, and 0 service performance claims.",
    "headlineStat": {
      "value": "4",
      "label": "authoritative sources reviewed",
      "source": "Declared protocol and source register"
    },
    "keyStats": [
      {
        "value": "4",
        "label": "authoritative sources"
      },
      {
        "value": "6",
        "label": "analysis sections"
      },
      {
        "value": "0",
        "label": "service performance claims"
      }
    ],
    "takeaways": [
      "Define the reference record",
      "Score four elements",
      "Test attribution and chronology"
    ],
    "sections": [
      {
        "heading": "Define the reference record",
        "body": "Before the meeting, agree what the reference will be: a recording, a written agenda with owner notes, or a post-meeting confirmation from the chair. The reference should be authoritative enough to settle a disagreement. If no reference exists, the test can still check internal consistency, but it cannot measure fidelity to the discussion.\n\nRecord the meeting type, the sensitivity, the attendees, and the note version. Remove or restrict personal and protected content before review. The test should not create a second uncontrolled copy of a sensitive meeting.",
        "table": []
      },
      {
        "heading": "Score four elements",
        "body": "For each decision, check whether the note states the decision, the rationale, the owner, and the effective date. For each action, check the specific output, the owner, the due date, and the dependency. For each open question, check that the note says it is unresolved and names the next step.\n\nScore omissions and additions separately. An omission can leave a team without a required action. An addition can create a commitment that was never made. Both matter. A note that is concise but invents a decision is less faithful than a longer note that labels uncertainty.",
        "table": []
      },
      {
        "heading": "Test attribution and chronology",
        "body": "Check that the note attributes statements to the right person or to the group. A comment from a customer advisor is not a decision by the executive. Check the order of events when the meeting changed direction. A note that presents the final decision without the earlier constraint can hide why the choice was made.\n\nLook for ambiguous pronouns and passive voice that hide the owner. Rewrite examples such as it was agreed or the team will follow up into a named owner and a specific action. The reviewer should be able to act on the note without asking who meant what.",
        "table": []
      },
      {
        "heading": "Reporting",
        "body": "Keep the reference record, the note, the scoring sheet, and the owner's confirmation. Report omissions and additions separately, and show the meeting type and sensitivity beside the result. A note that is accurate for a routine stand-up may not be sufficient for a board meeting with protected content.\n\nShare the summary with the note owner before using it in a performance review. The owner may have context that changes the interpretation. The purpose is a better decision record, not a score that punishes the assistant for a meeting that lacked a clear close.",
        "table": []
      },
      {
        "heading": "Limitations",
        "body": "The reference record may itself be incomplete or biased. A recording captures words but not side conversations or prior context. The note may be accurate for the declared purpose but insufficient for a different audience. The test measures fidelity to the stated standard, not universal completeness.\n\nSensitive meetings may not be eligible for recording or review. In those cases, use a chair confirmation and a shorter note. Do not trade privacy for a more precise score.",
        "table": []
      },
      {
        "heading": "Decision use",
        "body": "Use the result to improve the template, the meeting owner's instructions, or the review step. If decisions are consistently missed, the note template may not prompt for them. If actions lack owners, the meeting may be ending without a clear close.\n\nRetest after a template change or a new meeting type. Keep the reference record and the reviewed note under the approved retention rule. The goal is a decision record that the team can trust, not a perfect transcript. Include the meeting owner in the review, because a note can be faithful to the words and still miss the decision the chair intended. That conversation is part of the standard, not an exception to it.",
        "table": []
      }
    ],
    "sourceNotes": "Sources checked October 22, 2026. Method protocol only; no provider performance claim.",
    "sources": [
      {
        "name": "Google Site Reliability Engineering Workbook, Postmortem Culture",
        "url": "https://sre.google/workbook/postmortem-culture/",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "W3C Web Content Accessibility Guidelines 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Public guidance supporting the protocol."
      }
    ],
    "internalLinks": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ],
    "faqs": [],
    "relatedResearch": [
      "va-task-scope-clarity-method",
      "va-work-sample-scoring-validity",
      "inbox-triage-accuracy-method"
    ],
    "image": {
      "src": "/images/thumbnails/generated/meeting-note-fidelity-method.webp",
      "alt": "A Fidelity Test for Meeting Notes and Action Items"
    },
    "cta": "Use the method to define the population, evidence, and reviewer before testing.",
    "serviceHandoff": {
      "href": "/services",
      "label": "Review virtual assistant services",
      "copy": "Translate the method into a bounded role brief with named review points."
    }
  },
  {
    "slug": "va-ramp-review-cadence-method",
    "title": "Choosing a Ramp Review Cadence for a New VA",
    "excerpt": "Four checkpoints are better than a single 30 day verdict. This protocol makes each review decision-ready.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "methodology": "Bounded method review with 4 authoritative sources, 6 analysis sections, and 0 service performance claims.",
    "headlineStat": {
      "value": "4",
      "label": "authoritative sources reviewed",
      "source": "Declared protocol and source register"
    },
    "keyStats": [
      {
        "value": "4",
        "label": "authoritative sources"
      },
      {
        "value": "6",
        "label": "analysis sections"
      },
      {
        "value": "0",
        "label": "service performance claims"
      }
    ],
    "takeaways": [
      "Checkpoint one: orientation",
      "Checkpoint two: supervised work",
      "Checkpoint three: gated independence"
    ],
    "sections": [
      {
        "heading": "Checkpoint one: orientation",
        "body": "The first review asks whether the VA can explain the lane, find the authoritative sources, and recognize a stop. Use a short walkthrough and one realistic case. The evidence is the explanation and the questions asked, not a quiz score.\n\nIf the VA cannot find the source or describe the boundary, the onboarding material needs repair. Do not move to live work until this checkpoint passes. A fast start that skips orientation creates rework later.",
        "table": []
      },
      {
        "heading": "Checkpoint two: supervised work",
        "body": "The second review examines a sample of work completed with review. Check accuracy, evidence, authority, and communication. Record the correction types and the reviewer minutes. A high correction rate may indicate a training gap, an unclear rule, or a mismatch between the task and the hire.\n\nChoose one correction for the next period. Do not list every minor issue. The VA should know exactly what to change and how it will be checked. The reviewer should also note any part of the brief that caused confusion.",
        "table": []
      },
      {
        "heading": "Checkpoint three: gated independence",
        "body": "The third review tests whether the VA can work with a sample check and a clear exception route. Include at least one adverse case. The evidence is the queue record, the stop decisions, and the destination acceptance. A correct stop is a pass.\n\nIf the VA is not ready, narrow the lane rather than adding more supervision to the same scope. A smaller lane with clear evidence is better than a broad lane with hidden repair. Set a date for the next review and the specific evidence needed.",
        "table": []
      },
      {
        "heading": "Checkpoint four: independent sample",
        "body": "The fourth review uses a fresh sample that the VA handled without line-by-line review. Compare it with the standard agreed at the start. Check the quality criteria, the case mix, and the supervision cost. Decide whether to expand, continue, or stop.\n\nRecord the decision and the reason. If the decision is to expand, add one lane and keep a review gate. If it is to continue, state the evidence that would support expansion. If it is to stop, follow the contract and the offboarding process.",
        "table": []
      },
      {
        "heading": "Recording the decision",
        "body": "Write a one-page ramp record for each checkpoint: the date, the evidence reviewed, the corrections, the process changes, and the decision. Name the reviewer and the business owner. If the decision is to continue, state the next checkpoint and the evidence required. If it is to expand, name the new lane and its review gate.\n\nKeep the record with the onboarding file and the contract documents. Do not rely on a chat summary. A written ramp record protects the VA and the employer by showing what was reviewed and why the decision was made. Review the cadence after the first full ramp and remove any checkpoint that did not produce a useful decision. Add a checkpoint only when a real failure shows that the current sequence missed something material.",
        "table": []
      },
      {
        "heading": "Limitations",
        "body": "The cadence depends on the task, the reviewer's availability, and the quality of the written brief. A short review may miss a slow-burn problem. A small sample may not represent the full queue. The protocol measures the evidence available at each checkpoint, not the person's potential.\n\nIt also cannot separate the hire's performance from the manager's support or the tooling. Report those conditions beside the result. A fair review looks at the system as well as the individual.",
        "table": []
      }
    ],
    "sourceNotes": "Sources checked October 22, 2026. Method protocol only; no provider performance claim.",
    "sources": [
      {
        "name": "International Labour Organization, Data",
        "url": "https://www.ilo.org/data",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "World Bank, Philippines Overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Public guidance supporting the protocol."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Public guidance supporting the protocol."
      }
    ],
    "internalLinks": [
      "executive-inbox-triage-for-a-philippines-va",
      "calendar-management-rules-for-a-remote-assistant",
      "travel-booking-boundaries-for-a-virtual-assistant"
    ],
    "faqs": [],
    "relatedResearch": [
      "va-task-scope-clarity-method",
      "va-work-sample-scoring-validity",
      "inbox-triage-accuracy-method"
    ],
    "image": {
      "src": "/images/thumbnails/generated/va-ramp-review-cadence-method.webp",
      "alt": "Choosing a Ramp Review Cadence for a New VA"
    },
    "cta": "Use the method to define the population, evidence, and reviewer before testing.",
    "serviceHandoff": {
      "href": "/services",
      "label": "Review virtual assistant services",
      "copy": "Translate the method into a bounded role brief with named review points."
    }
  }
] satisfies ResearchPost[];
