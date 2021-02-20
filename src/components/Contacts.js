import React from "react";
import Grid from "@material-ui/core/Grid";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";

export const Contacts = () => {
  const contacts = useContacts();

  if (contacts.isLoading) {
    return <div>...loading</div>;
  }
  if (contacts.isError) {
    return <div>...error</div>;
  }
  return (
    <Grid item xs={12}>
      <ContactsTable data={contacts.data} />
    </Grid>
  );
};
