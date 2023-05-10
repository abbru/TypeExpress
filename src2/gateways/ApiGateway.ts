import { InfoMedia, InfomediaPinGenerateBodyDTO } from "../interfaces/PinInterfaces";

export class ApiGateway {
    baseUrl: string;
    apiKey: string;

    constructor(){
        this.baseUrl = process.env.API_URL!;
        this.apiKey = process.env.API_KEY!;
    }

    async generatePin(body: InfomediaPinGenerateBodyDTO): Promise<InfoMedia>{
        const url = `${this.baseUrl}PINGenerateWithParams`;
        //TODO hacer el mapeo real
        return this.fetchPostApi(url, body) as unknown as InfoMedia;
    }

    private async fetchPostApi(url: string, body: InfomediaPinGenerateBodyDTO): Promise<object> {
        const response: Response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'X-Infomedia-Api-Key': this.apiKey,
          },
          body: JSON.stringify(body)
        });

        return response.json();
    }
}