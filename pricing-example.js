import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  title: {
    color: theme.palette.primary.color,
    fontSize: 24
  },
  subheader: {
    color: theme.palette.primary.main,
    fontSize: 30,
    paddingTop: 20
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  cardContent: {
    flex: "1 0 auto",
    justifyContent: "center"
  },
  cardPricing: {
    textAlign: "left"
  },
  cardRoot: {
    display: "flex",
    flexDirection: "column",
    height: 500,
    "&:hover": {
      boxShadow: "0 1px 4px 0 #007AFF, 0 4px 16px 0 #007AFF"
    }
  },
  textGreen: {
    color: "green",
  },
  listItem: {
    fontSize: 14,
    paddingLeft: 4,
    paddingRight: 4
  },
  item: {
    padding: 5
  }
});

const tiers = [
  {
    title: "Scheme1",
    subheader: "Free",
    price: "0",
    description: ["item", "item","item","item","item"],
    buttonText: "Current Plan",
    buttonVariant: "flat"
  },
  {
    title: "Scheme2",
    subheader: "€2 / month",
    price: "15",
    description: [
      "item2","item2","item2","item2","item2","item2",
    ],
    buttonText: "Change Plan",
    buttonVariant: "contained"
  },
  {
    title: "Scheme3",
    subheader: "€9 / month",
    price: "30",
    description: [
      "item3",
      "item3",
      "item3",
      "item3",
      "item3",
      "item3",
      "item3",
      
    ],
    buttonText: "Change Plan",
    buttonVariant: "contained"
  }
];

class PricingExample extends React.Component {
  state = {
    spacing: "16"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid
        container
        spacing={40}
        alignItems="flex-end"
        alignContent="space-between"
      >
        {tiers.map(tier => (
          <Grid item key={tier.title} xs={12} md={4}>
            <Card className={classes.cardRoot}>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                classes={{
                  title: classes.title,
                  subheader: classes.subheader
                }}
              />
              <CardContent className={classes.cardContent}>
                <List paddingLeft={0}>
                  {tier.description.map(line => (
                    <ListItem
                      divider={true}
                      key={line}
                      classes={{ root: classes.item }}
                    >
                      <ListItemIcon>
                        <DoneIcon
                          className={classNames([
                            classes.textGreen,
                            classes.floatRight
                          ])}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={line}
                        classes={{ primary: classes.listItem }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions className={classes.cardActions} disableActionSpacing>
                <Button fullWidth variant={tier.buttonVariant} color="primary">
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(PricingExample);
