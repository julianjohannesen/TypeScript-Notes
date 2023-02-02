/* The idea here is to demostrate that you can get tsc's error checking on js files, which is awesome. With allowJs and checkJs set to true in tsconfig, you can run tsc on this file and see all of the error messages. tsc is able to figure out, for example, that 'id' is supposed to be a number and not a string and that birthDate should be a Date type. After running tsc on this file, the errors will be underlined in red. Hovering over them in VSCode will reveal details. */

/* Below is some JSDoc comment syntax. It tells tsc more about types & definitions in js files. For example, the parameter 'contactId' is a number. Of course, you don't need to use this snytax in a ts file, because you include information about types, etc. in your code. */

/**
 * 
 * @param {number} contactId 
 * @returns 
 */

async function getContact(contactId) {
    // The $ is jQuery syntax. More about that later.
    const resp = await $.ajax({
      url: `/contacts/${contactId}`,
      dataType: "json",
    });
  
    return {
      id: +resp.id,
      name: resp.name,
      birthDate: new Date(resp.birthDate),
    };
  }
  
  getContact(1).then((contact) => {
    contact.id = "1234"
    contact.birthDate = "12/12/1990";
  });
  
  getContact("2").then((contact) => {
    console.log("Contact: ", JSON.stringify(contact));
  });