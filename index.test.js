const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimProperties(input);
    expect(actual).not.toBe(input);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = input;
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const initial = [
      { integer: Math.floor(Math.random() * 100) },
      { integer: Math.floor(Math.random() * 100) },
      { integer: Math.floor(Math.random() * 100) },
    ];
    const correctAnswer = initial.reduce(function (accumulator, currentValue) {
      if (accumulator.integer > currentValue.integer) {
        return accumulator;
      } else {
        return currentValue;
      }
    });
    const expected = correctAnswer;
    const actual = utils.findLargestInteger(initial);
    console.log(initial);
    console.log(expected);
    expect(actual).toEqual(expected["integer"]);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    for (let i = 0; i < 4; i++) {
      counter.countDown();
    }
    const actual = counter;
    const expected = { count: 0 };
    expect(actual).toEqual(expected);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const actual = counter;
    const expected = { count: 2 };
    expect(actual).toEqual(expected);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    for (let i = 0; i < 5; i++) {
      counter.countDown();
    }
    const actual = counter;
    const expected = { count: 0 };
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const season = seasons.next();
    expect(season).toEqual("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const season = seasons.next();
    expect(season).toEqual("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    const season = seasons.next();
    expect(season).toEqual("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    const season = seasons.next();
    expect(season).toEqual("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    const season = seasons.next();
    expect(season).toEqual("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
      110;
    }
    const season = seasons.next();
    expect(season).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    const initialOdometer = focus.odometer;
    const updated = focus.drive(100);
    expect(updated).toBeGreaterThan(initialOdometer);
    expect(updated).toEqual(100);
  });
  test("[16] driving the car uses gas", () => {
    const initialFuel = focus.fuel;
    focus.drive(100);
    const updated = focus.fuel;
    expect(updated).toBeLessThan(initialFuel);
    expect(updated).toEqual(focus.tank - 100 / focus.mpg);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(600);
    const initialOdometer = focus.odometer;
    focus.drive(600);
    const secondOdometer = focus.odometer;
    focus.refuel(100);
    focus.drive(600);
    const finalOdometer = focus.odometer;
    expect(initialOdometer).toEqual(secondOdometer);
    expect(finalOdometer).toBeGreaterThan(initialOdometer);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    const initialFuel = focus.fuel;
    focus.refuel(100);
    const updated = focus.fuel;
    expect(updated).toEqual(initialFuel);
    expect(updated).toEqual(focus.tank);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const actual = await utils.isEvenNumberAsync(2);
    expect(actual).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async() => {
    const actual = await utils.isEvenNumberAsync(3);
    expect(actual).toBe(false);
  });
});
