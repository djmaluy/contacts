import React from "react";
import Grid from "@material-ui/core/Grid";
import { useContacts } from "./useContacts";
import { Typography } from "@material-ui/core";
import { ViewMods } from "./../components/ViewMods";
import { ContactsTable } from "./ContactsTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./Contacts.module.css";
import { DATA_VIEW_MODES } from "./constants";
import { useDataViewMode } from "./useDataViewMode";

export const Contacts = () => {
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useDataViewMode();

  return (
    <>
      <Grid item xs={12} className={classes.headContent}>
        <Typography variant="h4" component="h2">
          Contacts
        </Typography>
        <ViewMods
          dataViewMode={dataViewMode}
          setDataViewMode={setDataViewMode}
          dataViewModesTable={DATA_VIEW_MODES.TABLE}
          dataViewModesGrid={DATA_VIEW_MODES.GRID}
        />
      </Grid>
      <Grid item xs={12}>
        {(() => {
          if (contacts.isLoading) {
            return <CircularProgress color="secondary" />;
          }
          if (contacts.isError) {
            return <div>...error</div>;
          }
          if (dataViewMode === DATA_VIEW_MODES.TABLE) {
            return <ContactsTable data={contacts.data} />;
          }
          if (dataViewMode === DATA_VIEW_MODES.GRID) {
            return "grid";
          }
          return null;
        })()}
      </Grid>
    </>
  );
};
