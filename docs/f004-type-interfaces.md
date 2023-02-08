## Intefaces

TS allows you to create custom types using the **interface** keyword.

Intefaces are only used at transpile time and never appear in your runtime code.

```ts
inteface Contact {
    id: number;
    name: string;
    // The question mark indicates that this field is optional
    birthdate?: Date;
}
// primaryContact is assigned type 'Contact'
let primaryContact: Contact;
```

The syntax is very close to JS class syntax, however, each line ends in an optional semicolon rather than a comma.

Notice the question mark at the end of 'birthday?'. That question mark indicates that the field is optional. Because it's an optional field, tsc will not raise an error if you leave this field out when you define primaryContact.

Multiple interfaces can be combined to create a new interface. For example, we could add an Address interface to Contact to include address fields.

```ts
interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: number;
}

interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date;
}

let primaryContact: Contact = {
    id: 4456,
    name: "Bob Smith",
    // Include any field from Address
    postalCode: 02145
}
```

But can you create for example, custom types for state and postal code that match a particular regexp pattern?
