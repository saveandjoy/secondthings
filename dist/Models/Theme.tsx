export class Theme {
    constructor(primaryColor: string, primaryColorAccent: string,
                secondaryColor: string, secondaryColorAccent: string,
                warningColor: string, warningColorAccent: string,
                successColor: string, successColorAccent: string,
                neutralColor: string, neutralColorAccent: string,
                black: string, white: string) {
        this.primaryColor = primaryColor;
        this.primaryColorAccent = primaryColorAccent;
        this.secondaryColor = secondaryColor;
        this.secondaryColorAccent = secondaryColorAccent;
        this.warningColor = warningColor;
        this.warningColorAccent = warningColorAccent;
        this.successColor = successColor;
        this.successColorAccent = successColorAccent;
        this.neutralColor = neutralColor;
        this.neutralColorAccent = neutralColorAccent;
        this.black = black;
        this.white = white;
    }
    primaryColor: string;
    primaryColorAccent:string;
    secondaryColor:string;
    secondaryColorAccent:string;
    warningColor:string;
    warningColorAccent:string;
    successColor:string;
    successColorAccent:string;
    neutralColor:string;
    neutralColorAccent:string;
    black:string;
    white:string;
}