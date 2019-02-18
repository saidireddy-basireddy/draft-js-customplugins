// tslint:disable:interface-name
// tslint:disable:max-line-length
// tslint:disable:class-name
export interface ITagData {
  Name: string;
  Link?: string;
}

export interface IEmojiData {
  ID: string;
  Name: string;
  Skin: number;
}

export interface IUserDetails {
  AccountName?: string;
  CellPhone?: string;
  DisplayName?: string;
  Email?: string;
  FirstName?: string;
  HomePhone?: string;
  ID: number;
  JobTitle?: string;
  LastName?: string;
  UserImageURL?: string;
  UserName?: string;
  UserProfileURL?: string;
  WorkPhone?: string;
  IsSiteAdmin?: boolean;
}

/*************************************************** Data Structure for HashTags ***************************************************************/

export interface IHashTagSuggestionsConfig {
  suggestionFilteDefaultSize: number;
  suggestionPropToSearchBy: string;
  suggestionFieldId: string;
  suggestionFieldLink: string;
}

/*************************************************** Data Structure for Mentions ***************************************************************/

export interface IMentionSuggestionsConfig {
  suggestionFilteDefaultSize: number;
  suggestionPropToSearchBy: string;
  suggestionFieldId: string;
  suggestionFieldAccountName: string;
  suggestionFieldCellPhone: string;
  suggestionFieldDisplayName: string;
  suggestionFieldEmail: string;
  suggestionFieldFirstName: string;
  suggestionFieldHomePhone: string;
  suggestionFieldJobTitle: string;
  suggestionFieldLastName: string;
  suggestionFieldUserImageURL: string;
  suggestionFieldUserName: string;
  suggestionFieldUserProfileURL: string;
  suggestionFieldWorkPhone: string;
}

