// just the SoecialCards object

export default class SpecialCard {
    constructor(name, icon, requirements) {
        this.name = name;
        this.icon = icon;
        this.requirements = requirements;
        this.requirementsPartiallyMet = false;
        this.requirementsFullyMet = false;
        this.missingRequirements = [];
    }

    checkRequirements(forgeCards) {
        this.missingRequirements = [];
        // requirements array: [{forgeCard: string, quantity: int}]
        // forgeCards array: [ForgeCard, ForgeCard]
        // ForgeCard: {name, icon, quantity}
        const requirementsClone = JSON.parse(JSON.stringify(this.requirements));

        // go through heach forge card.
        forgeCards.map(forgeCard => {
            console.log("WE HERE WITH THE FORGE CARD", forgeCard)
            //if the forge card name is found in requirements
            console.log(requirementsClone)
            console.log("CHECKING AGAINST", forgeCard.name, requirementsClone.find(req => req.forgeCard === forgeCard.name))
            const matchingRequirement = requirementsClone.find(req => req.forgeCard === forgeCard.name)
            if(matchingRequirement) {
                // reduce the requirement by the forge card count
                this.requirementsPartiallyMet = true;
                matchingRequirement.quantity = matchingRequirement.quantity - forgeCard.quantity;

                // but set count to 0 if there's overkill
                if(matchingRequirement.quantity < 0) matchingRequirement.quantity = 0;
            }
        })

        // if all requirements in the clone === 0, set fully met to true and partially met to false
        if(this.requirementsPartiallyMet) {
            const fullyMetFlag = true;
            requirementsClone.forEach(req => {
                if(req.quantity > 0) {
                    fullyMetFlag = false;
                    this.missingRequirements.push(req)
                    console.log("MISSING", req)
                }
            });

            this.requirementsFullyMet = fullyMetFlag;
        }
    }
}