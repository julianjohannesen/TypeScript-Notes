/*

You can use almost any library with TS, but you'll need to find the appropriate type definitions package for that library. Here are two places to do that:

- https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
- https://www.npmjs.com/search?q=%40types

If you're using a different package manager, you'll need to find the appropriate type definitions package on the appropriate site.

So, for example, in order to use jQuery with TS, you'll need to install the @types/jquery package. Once that's done, you'll find @types/jquery/index.d.ts in your node_modules directory. The .d stands for 'definitions.' You'll see several other files as well.

*/
async function getContact(contactId) {
    /* Once you install the jQuery type definitions package, the jQuery methods you see below won't raise errors. If you're using VSCode, you'll also get autocomplete and inline documentation for jQuery methods. */
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
    contact.id = "1234";
    contact.birthDate = "12/12/1990";
});
getContact("2").then((contact) => {
    console.log("Contact: ", JSON.stringify(contact));
});
