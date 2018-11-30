# Basic Search Capsule

Basic models to exercise a search flow for finding shoes. Very little work done here on presentation 
(some simple dialogs and a layout). Check the stories for example use cases. Note that this example also 
demonstrates usage of Fetch action as a lazy source for the accessories property of a Shoe. 


The FindShoe action model `FindShoe.model.bxb` is backed by the Javascript `FindShoe.js`.
Note the parallel relationship for FindAccessories model and js files.

The FindShoe action is a _Search_, which uses the inputs as constraints.
The FindAccessories action is actually a _Fetch_, which is a simple lookup of additional data from a single input.

The lazy-source, as its name implies, means that the data is only fetched when needed. In this example, it means that the fetch won't
happen until the `shoe-details-fragment.layout.bml` is rendered.

For more details, check https://bixbydevelopers.com/dev/docs/reference/type/structure.property.lazy-source

## Changelog

### 2.1.2
- VIV-23529 AthleticShoe story fix

### 2.1.1
- .6t files to .bxb

### 2.1.0
- Layout updates
- Added training for price range

Changes on 1/31/2018
- capsule.6t: Added version for imports

Changes on 2/13/2018
- Updated to use latest bixby-2 versions