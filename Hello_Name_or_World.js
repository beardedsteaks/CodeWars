function hello(name) {
  let length = name.length;
  
  if (length > 0){
	  name[0] = name[0].toUpperCase();
	  for (let i = 1; i < length; i++) {
		  name[i] = name[i].toLowerCase();
	  }
	  let message = 'Hello, ' + name + '!'
	  return message;
  } else {
	  return 'Hello, World!';
  }
}