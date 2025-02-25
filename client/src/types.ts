export interface Clientform {
  firstName: string;
  lastName: string;
  email: string;
}

export interface TaxDuty {
  id: string;
  name: string;
  description: string;
  frequency: string;
  amount: number;
  dueDate: string;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  frequency: string;
  serviceType: string;
}
