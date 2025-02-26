import { SubmitButtonProps } from "../../types";

export default function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-3 rounded-lg"
    >
      {children}
    </button>
  );
}
