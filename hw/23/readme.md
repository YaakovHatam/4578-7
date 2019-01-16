# School events management

Ministry of Education decided to develop an Event management system for every school.

## Tech stack
Client side: `Angular`

Server Side: **TBD**

Style: `less`

Auth: **TBD**

Platform: **Firebase**?

## Preparing work space
- Create a new Angular app
- install and configure bootstrap

## Our models
- `Event`
- `Venue`
- `Participant`

## Warming up
### Client side
#### Event component
The event component get an event (using `input` decorator) and show the details.

#### Event List
The event list component will have Filters (inputs) and the componentn interact with `events` service to bring the list, and looping over the items using `event` component.

#### Event service
The event service responsible for all data

#### Header component
this component will contain the menu and the logo

#### Menu component
Will have a list of menu items 

#### Menu item component
represent a menu item