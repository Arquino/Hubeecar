import { LIST_CONTACTS } from "../api/gql/contactsQueries";

export const mockedContacts_1 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 0,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-1",
            firstName: "contact-firstName-1",
            lastName: "contact-lastName-1",
            email: "email1",
          },
          {
            id: "contact-2",
            firstName: "contact-firstName-2",
            lastName: "contact-lastName-2",
            email: "email2",
          },
          {
            id: "contact-3",
            firstName: "contact-firstName-3",
            lastName: "contact-lastName-3",
            email: "email3",
          },
          {
            id: "contact-4",
            firstName: "Arnaud-4",
            lastName: "MINKO MI ETOUA",
            email: "email4",
          },
          {
            id: "contact-5",
            firstName: "Damiens-5",
            lastName: "M",
            email: "email3",
          },
          {
            id: "contact-6",
            firstName: "Arnaud-6",
            lastName: "Minko-6",
            email: "email3",
          },
          {
            id: "contact-7",
            firstName: "Arnaud-7",
            lastName: "Minko-7",
            email: "email3",
          },
          {
            id: "contact-8",
            firstName: "Arnaud-8",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-9",
            firstName: "Carl-9",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-10",
            firstName: "Arnaud-10",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-11",
            firstName: "Arnaud-11",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-12",
            firstName: "Arnaud-12",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-13",
            firstName: "Arnaud-13",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-14",
            firstName: "Arnaud-14",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-15",
            firstName: "Denis-15",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-16",
            firstName: "Arnaude-16",
            lastName: "Minko-3",
            email: "email3",
          },
          {
            id: "contact-17",
            firstName: "Arnaude-17",
            lastName: "Minko-3",
            email: "email3",
          },
        ],
      },
    },
  },
};

export const mockedContacts_2 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 1,
      itemsPerPage: 3,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-4",
            firstName: "contact-firstName-4",
            lastName: "contact-lastName-4",
            email: "email4",
          },
          {
            id: "contact-5",
            firstName: "contact-firstName-5",
            lastName: "contact-lastName-5",
            email: "email5",
          },
          {
            id: "contact-6",
            firstName: "contact-firstName-6",
            lastName: "contact-lastName-6",
            email: "email6",
          },
        ],
      },
    },
  },
};

export const mockedContacts_3 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 0,
      itemsPerPage: 5,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-1",
            firstName: "contact-firstName-1",
            lastName: "contact-lastName-1",
            email: "email1",
          },
          {
            id: "contact-2",
            firstName: "contact-firstName-2",
            lastName: "contact-lastName-2",
            email: "email2",
          },
          {
            id: "contact-3",
            firstName: "contact-firstName-3",
            lastName: "contact-lastName-3",
            email: "email3",
          },
          {
            id: "contact-4",
            firstName: "contact-firstName-4",
            lastName: "contact-lastName-4",
            email: "email4",
          },
          {
            id: "contact-5",
            firstName: "contact-firstName-5",
            lastName: "contact-lastName-5",
            email: "email5",
          },
        ],
      },
    },
  },
};

export const mockedContacts_4 = {
  request: {
    query: LIST_CONTACTS,
    variables: {
      page: 1,
      itemsPerPage: 5,
    },
  },
  result: {
    data: {
      contacts: {
        paginationInfo: {
          totalCount: 6,
        },
        items: [
          {
            id: "contact-6",
            firstName: "contact-firstName-6",
            lastName: "contact-lastName-6",
            email: "email6",
          },
        ],
      },
    },
  },
};
