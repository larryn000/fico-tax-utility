export interface StateInformation {
    state: string;
    name: string;
    tax: number;
    extraFieldLabel?: string;
}

export const STATE_TAXES: StateInformation[] = [
    { state: "AZ", name: "Arizona", tax: 0.05, extraFieldLabel: "Rental income deduction" },
    { state: "VA", name: "Virginia", tax: 0.03, extraFieldLabel: "Number of registered cars" }
];