class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGultenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
      this.id=id;
      this.categoryIds=categoryIds;
      this.title=title;
      this.affordability=affordability;
      this.complexity=complexity;
      this.imageUrl=imageUrl;
      this.duration=duration;
      this.ingredients=ingredients;
      this.steps=steps;
      this.isGultenFree=isGultenFree;
      this.isVegan=isVegan;
      this.isVegetarian=isVegetarian;
      this.isGultenFree=isLactoseFree

  }
}

export default Meal;
