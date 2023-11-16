import emailjs from '@emailjs/browser';


const sentEmail = async (data) => {

  const templateParams = {
      name: 'James',
      notes: 'Check this out!'
  };

  emailjs.send('service_rb06zqh','template_f1mco3r', data, 'GHNbY0LeP866dSXV2')
    .then((response) => {
      return true
	    console.log('SUCCESS!', response.status, response.text);
	  }, (err) => {
      console.log('FAILED...', err);
      return false
    })
}

export default sentEmail;
