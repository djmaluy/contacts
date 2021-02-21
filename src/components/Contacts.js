import React from "react";
import Grid from "@material-ui/core/Grid";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Contacts = () => {
  const contacts = useContacts();

  if (contacts.isLoading) {
    return <CircularProgress color="secondary" />;
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
