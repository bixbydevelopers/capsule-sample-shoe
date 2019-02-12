<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Simple Search Sample Capsule</h1>
</p>

## Overview

This capsule is the the companion code to the Bixby [Simple Search Capsule](https://bixbydevelopers.com/dev/docs/sample-capsules/walkthroughs/simple-search) guide. This sample capsule shows how to include basic search in a capsule. The user can start with a simple utterance, such as "Find me some shoes," or do a more specific search, such as "Find me dancing shoes."

---


## Development Notes

The UI is very basic (some simple dialogs and a layout). This example also 
demonstrates usage of Fetch action as a lazy source for the accessories property of a Shoe. 


The FindShoe action model `FindShoe.model.bxb` is backed by the Javascript `FindShoe.js`.
Note the parallel relationship for FindAccessories model and js files.

The FindShoe action is a _Search_, which uses the inputs as constraints.
The FindAccessories action is actually a _Fetch_, which is a simple lookup of additional data from a single input.

The lazy-source, as its name implies, means that the data is only fetched when needed. In this example, it means that the fetch won't
happen until the `shoe-details-fragment.layout.bml` is rendered.

For more details, check https://bixbydevelopers.com/dev/docs/reference/type/structure.property.lazy-source

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”


