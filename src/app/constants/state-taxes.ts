export interface StateInformation {
    state: string;
    name: string;
    tax: number;
}

export const STATE_TAXES: StateInformation[] = [
    { state: "AZ", name: "Arizona", tax: 0.05 },
    { state: "VA", name: "Virginia", tax: 0.03 }
];