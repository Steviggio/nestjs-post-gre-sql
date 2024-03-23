export class CreateLanguageDto {
  name: string;
  numberOfSpeakers: number;
  speakingCountries: [{ name: string }];
  mainCountry: string;
  similarLanguages: [{ name: string }];
}

