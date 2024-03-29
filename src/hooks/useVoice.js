
  export const useVoice =(rate=0.5, pitch=1.5, volume=0.5)=>{
    
      function getVoices() {
        let voices = speechSynthesis.getVoices();
        if(!voices.length){
          // some time the voice will not be initialized so we can call spaek with empty string
          // this will initialize the voices 
          let utterance = new SpeechSynthesisUtterance("");
          speechSynthesis.speak(utterance);
          voices = speechSynthesis.getVoices();
        }
        return voices;
      }
    function speak(text, voice, rate, pitch, volume) {
        // create a SpeechSynthesisUtterance to configure the how text to be spoken 
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = volume; // From 0 to 1
        speakData.rate = rate; // From 0.1 to 10
        speakData.pitch = pitch; // From 0 to 2
        speakData.text = text;
        speakData.lang = 'en';
        speakData.voice = voice;
        
        // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
        speechSynthesis.speak(speakData);
      
      }
      const playVoice = (textStr)=>{
        if ('speechSynthesis' in window) {

            let voices = getVoices();
            let rate = 1, pitch = 2, volume = 1;
            let text = "Spaecking with volume = 1 rate =1 pitch =2 ";
          
            // speak(text, voices[5], rate, pitch, volume);
          
            //rate = 0.5; pitch = 2, volume = 0.5;
              speak(textStr, voices[1], rate, pitch, volume );
          }else{
            console.log(' Speech Synthesis Not Supported 😞'); 
          }
      }
      return {
          playVoice,
      }
  }