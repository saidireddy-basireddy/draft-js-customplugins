// tslint:disable
let config = {    
  postControlPlaceholder: 'Enter your text...',  
  defaultProfilePic:"",
  mockData: true,
  mentionPluginDefaults: {
    mentionPrefix: '@',
    mentionTrigger: '@',
    suggestionFilterDefaultSize: 5,
    suggestionPropToSearchBy: 'DisplayName',
    mentionTriggerCount: 2
  },
  hashTagPluginDefaults: {
    hashTagPrefix: '#',
    hashTagTrigger: '#',
    suggestionFilterDefaultSize: 5,
    suggestionPropToSearchBy: 'Name',
    hashTagLinkTarget: '_blank',
    hashTagTriggerCount: 0
  },
  emojiPluginDefaults: {
    emojiPrefix: ':',
    emojiTrigger: ':',
    suggestionFilterDefaultSize: 5,
    suggestionPropToSearchBy: 'Name',      
    emojiTriggerCount: 1
  }  
  
};

export default config;

