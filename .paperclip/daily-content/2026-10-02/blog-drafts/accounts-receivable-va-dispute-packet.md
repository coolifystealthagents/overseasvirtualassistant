# Build an accounts-receivable dispute packet with a virtual assistant

An invoice dispute often spreads across the ledger, contract, purchase order, delivery record, support tickets, and an email thread. A virtual assistant can assemble those sources into one review packet. Finance, legal, sales, and other authorized owners must decide credits, collections steps, contract meaning, write-offs, payment plans, and bank-detail changes.

The packet should show what was billed, what the customer disputes, what the records establish, and which decision is still open. It should not argue that the customer is wrong or promise a credit before the responsible owner reviews the evidence.

## Anchor the case to the ledger

Start with a stable customer and invoice identifier. Record invoice number, issue date, due date shown, currency, billed amount, open balance, ledger status, purchase-order reference, account owner, and source links. Preserve the current ledger state before anyone makes an adjustment.

Separate a customer-stated balance from the accounting record. If the customer says only half is owed, record that as the disputed position. Do not overwrite the open balance to make the packet match the email.

Use read-only access during preparation where possible. The assistant does not need payment-release, journal-entry, credit-memo, or bank-edit permission to collect evidence.

## Reconstruct invoice and delivery evidence

Create an evidence table for the agreement, order, invoice line, delivery or service record, acceptance record, prior credit, tax record, and relevant correspondence. Each row needs a source, date, owner, and limitation. A shipment confirmation may show dispatch without proving acceptance. A time entry may show recorded work without deciding whether the contract permits billing it.

Preserve conflicting records. If the purchase order lists 100 units while the invoice lists 120, show both values and route the difference. The assistant can calculate the arithmetic difference as an observation but cannot decide which quantity controls.

Avoid placing full payment credentials or unrelated customer data in the packet. Link controlled records and copy only the fields reviewers need.

## Separate the customer's claim from findings

Summarize the dispute in the customer's own terms: duplicate charge, wrong quantity, missing delivery, rate disagreement, tax question, unauthorized purchase, service complaint, or another stated reason. Link the original message. Do not soften or strengthen it.

Then list observed evidence separately. "Invoice 481 and invoice 496 both reference purchase order 730" is an observation. "Customer was charged twice" is a conclusion until the finance owner compares the underlying transactions.

Record open questions with named owners. Contract interpretation goes to the authorized legal or commercial reviewer. Service quality goes to the delivery owner. Tax treatment goes to the qualified finance or tax owner. The assistant keeps the packet moving without deciding these questions.

## Work a duplicate-charge example

Suppose a customer disputes a $4,800 invoice as a duplicate. The ledger shows two invoices for the same amount issued a week apart. One references a monthly service period; the other references a project milestone. Both use the same purchase-order number, and the customer's email attaches only the first invoice.

The assistant builds the packet with both invoices, service period, milestone record, purchase order, account notes, and payment history. The assistant flags the repeated amount and purchase-order number. The packet does not state that the charge is valid merely because the descriptions differ.

The account owner confirms that the purchase order can cover both items, while the delivery owner finds that the milestone acceptance is still missing. Finance decides to hold collection activity until the evidence is complete. The assistant records that decision and prepares an approved acknowledgment to the customer without promising the final result.

## Protect bank-detail changes

A dispute conversation can be used to introduce fraudulent payment instructions. Treat any request to change remittance details, refund destination, contact identity, or portal access as a separate high-risk case. Verify it through a trusted channel that existed before the request.

The assistant can preserve the message and locate the approved customer or vendor record. The assistant should not call a number supplied in the same suspicious email, edit bank fields, issue a refund, or forward credentials into chat.

Record who verified the request, which trusted channel was used, and who approved the change. If verification fails, keep the financial record unchanged and route the event to security and finance.

## Route the decision and close the packet

Order the review page by customer deadline, amount and currency, dispute statement, ledger facts, evidence table, contradictions, open questions, and proposed communication. Name the person who must decide each action. A generic "finance to review" status often leaves cases untouched.

After a decision, link the approved credit, correction, collection step, or response. Confirm that ledger changes match the authorization and that the customer message states only the approved outcome. Keep the original dispute and evidence trail; do not rewrite history after resolution.

Track packets received, complete evidence sets, missing delivery records, disputed amounts, owner corrections, bank-change escalations, decision time, and reopened cases. State the number reviewed. Pilot with a duplicate allegation, quantity conflict, missing acceptance, tax question, and suspicious remittance request.

Test recovery during the pilot. Give the assistant a packet containing one incorrectly linked delivery record and ask the reviewer to reject it. The record should return to the evidence queue without changing the ledger or losing the customer's original message. Then replace the link, preserve the correction history, and resubmit it to the same decision owner. This exercise shows whether the workflow can survive an ordinary preparation error. A queue that can only move forward encourages staff to hide mistakes or repair them outside the record.

The [FTC guide to protecting personal information](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business) provides general security background. Apply the accounting, tax, contract, privacy, collections, and security requirements relevant to the business with qualified owners.

To scope dispute preparation, review [virtual assistant services](/services) or [request a role plan](/contact). Bring a redacted invoice, ledger view, purchase order, delivery record, and approval map.
