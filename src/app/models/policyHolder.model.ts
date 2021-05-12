export class PolicyHolder {
  constructor(obj) {
    this.dueMonth = obj.DueMonth;
    this.id = obj._id;
    this.policyNumber = obj.PolicyNumber;
    this.doc = obj.DOC;
    this.name = obj.Name;
    this.mode = obj.Mode;
    this.premium = obj.Prem;
    this.plan = parseInt(`${obj.Plan} ${obj.term}`, 10);
    this.sumAssured = obj.SumAssured;
    this.status = obj.Status;
  }
  dueMonth: Array<number>;
  id: string;
  policyNumber: number;
  doc: string;
  name: string;
  mode: string;
  premium: string;
  plan: number;
  sumAssured: string;
  status: string;
}
