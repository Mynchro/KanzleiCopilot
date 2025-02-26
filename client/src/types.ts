export interface Clientform {
  id: string;
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

export interface SubmitButtonProps {
  children: React.ReactNode;
}
