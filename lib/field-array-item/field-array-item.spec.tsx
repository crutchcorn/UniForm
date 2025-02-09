import { expect, test, vi } from "vitest";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Field, FieldArray, FieldArrayItem, Form } from "houseform";
import React, { useState } from "react";
import { z } from "zod";

test("Field array item should submit with values in tact", async () => {
  const SubmitValues = () => {
    const [values, setValues] = useState<string | null>(null);

    if (values) return <p>{values}</p>;

    return (
      <Form onSubmit={(values) => setValues(JSON.stringify(values))}>
        {({ submit }) => (
          <div>
            <FieldArray<{ thing: number }>
              initialValue={[{ thing: 1 }]}
              name={"people"}
            >
              {({ value }) => (
                <>
                  {value.map((person, i) => (
                    <FieldArrayItem<number>
                      key={`people[${i}].thing`}
                      name={`people[${i}].thing`}
                    >
                      {({ value, setValue }) => (
                        <div>
                          <p>Value: {value}</p>
                          <button onClick={() => setValue(2)}>Set value</button>
                        </div>
                      )}
                    </FieldArrayItem>
                  ))}
                </>
              )}
            </FieldArray>
            <button onClick={submit}>Submit</button>
          </div>
        )}
      </Form>
    );
  };

  const { getByText, container } = render(<SubmitValues />);

  expect(getByText("Value: 1")).toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Value: 2")).toBeInTheDocument();

  await user.click(getByText("Submit"));

  await waitFor(() =>
    expect(container).toMatchInlineSnapshot(`
      <div>
        <p>
          {"people":[{"thing":2}]}
        </p>
      </div>
    `)
  );
});

test("Field array item be able to set a value", async () => {
  const { getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((person, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                >
                  {({ value, setValue }) => (
                    <div>
                      <p>Value: {value}</p>
                      <button onClick={() => setValue(2)}>Set value</button>
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(getByText("Value: 1")).toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Value: 2")).toBeInTheDocument();
});

test("field array item should track `isDirty`", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((_, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                >
                  {({ setValue, isDirty }) => (
                    <div>
                      {isDirty && <p>Is dirty</p>}
                      <button onClick={() => setValue(2)}>Set value</button>
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(queryByText("Is dirty")).not.toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Is dirty")).toBeInTheDocument();
});

test("field array item should track `isTouched`", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((_, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                >
                  {({ isTouched, onBlur }) => (
                    <div>
                      {isTouched && <p>Is touched</p>}
                      <button onClick={() => onBlur()}>Blur</button>
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(queryByText("Is touched")).not.toBeInTheDocument();

  await user.click(getByText("Blur"));

  expect(getByText("Is touched")).toBeInTheDocument();
});

test("field array item should validate onChange", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((_, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                  onChangeValidate={z.number().min(3, "Must be at least 3")}
                >
                  {({ setValue, errors }) => (
                    <div>
                      <button onClick={() => setValue(2)}>Set value</button>
                      {errors.map((error) => (
                        <p key={error}>{error}</p>
                      ))}
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(queryByText("Must be at least 3")).not.toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Must be at least 3")).toBeInTheDocument();
});

test("field array item should validate onBlur", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((_, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                  onBlurValidate={z.number().min(3, "Must be at least 3")}
                >
                  {({ onBlur, errors }) => (
                    <div>
                      <button onClick={() => onBlur()}>Blur</button>
                      {errors.map((error) => (
                        <p key={error}>{error}</p>
                      ))}
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(queryByText("Must be at least 3")).not.toBeInTheDocument();

  await user.click(getByText("Blur"));

  expect(getByText("Must be at least 3")).toBeInTheDocument();
});

test("field array item should validate onSubmit", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {({ submit }) => (
        <div>
          <FieldArray<{ thing: number }>
            initialValue={[{ thing: 1 }]}
            name={"people"}
          >
            {({ value }) => (
              <>
                {value.map((_, i) => (
                  <FieldArrayItem<number>
                    key={`people[${i}].thing`}
                    name={`people[${i}].thing`}
                    onSubmitValidate={z.number().min(3, "Must be at least 3")}
                  >
                    {({ errors }) => (
                      <div>
                        {errors.map((error) => (
                          <p key={error}>{error}</p>
                        ))}
                      </div>
                    )}
                  </FieldArrayItem>
                ))}
              </>
            )}
          </FieldArray>
          <button onClick={submit}>Submit</button>
        </div>
      )}
    </Form>
  );

  expect(queryByText("Must be at least 3")).not.toBeInTheDocument();

  await user.click(getByText("Submit"));

  expect(getByText("Must be at least 3")).toBeInTheDocument();
});

test("field array item should work with listenTo as the subject", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <div>
          <Field<string>
            name={"test"}
            listenTo={[`people[0].thing`]}
            onChangeValidate={z.string().min(3, "Must be at least 3")}
            initialValue={"T"}
          >
            {({ errors }) => (
              <div>
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
          </Field>
          <FieldArray<{ thing: number }>
            initialValue={[{ thing: 1 }]}
            name={"people"}
          >
            {({ value }) => (
              <>
                {value.map((_, i) => (
                  <FieldArrayItem<number>
                    key={`people[${i}].thing`}
                    name={`people[${i}].thing`}
                  >
                    {({ setValue }) => (
                      <button onClick={() => setValue(2)}>Set value</button>
                    )}
                  </FieldArrayItem>
                ))}
              </>
            )}
          </FieldArray>
        </div>
      )}
    </Form>
  );

  expect(queryByText("Must be at least 3")).not.toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Must be at least 3")).toBeInTheDocument();
});

test("field array item should work with listenTo as the listener", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <div>
          <Field<string> name={"test"} initialValue={"T"}>
            {({ setValue }) => (
              <button onClick={() => setValue("Tes")}>Set value</button>
            )}
          </Field>
          <FieldArray<{ thing: number }>
            initialValue={[{ thing: 1 }]}
            name={"people"}
          >
            {({ value }) => (
              <>
                {value.map((_, i) => (
                  <FieldArrayItem<number>
                    key={`people[${i}].thing`}
                    name={`people[${i}].thing`}
                    onChangeValidate={z.number().min(3, "Must be at least 3")}
                    listenTo={[`test`]}
                  >
                    {({ errors }) => (
                      <div>
                        {errors.map((error) => (
                          <p key={error}>{error}</p>
                        ))}
                      </div>
                    )}
                  </FieldArrayItem>
                ))}
              </>
            )}
          </FieldArray>
        </div>
      )}
    </Form>
  );

  expect(queryByText("Must be at least 3")).not.toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Must be at least 3")).toBeInTheDocument();
});

test("field array item should provide an error when improperly prefixed", async () => {
  expect(() =>
    render(
      <Form>
        {() => (
          <div>
            <Field<string> name={"test"} initialValue={"T"}>
              {({ setValue }) => (
                <button onClick={() => setValue("Tes")}>Set value</button>
              )}
            </Field>
            <FieldArray<{ thing: number }>
              initialValue={[{ thing: 1 }]}
              name={"people"}
            >
              {({ value }) => (
                <>
                  {value.map((_, i) => (
                    <FieldArrayItem<number>
                      key={`person[${i}].thing`}
                      name={`person[${i}].thing`}
                      onChangeValidate={z.number().min(3, "Must be at least 3")}
                      listenTo={[`test`]}
                    >
                      {({ errors }) => (
                        <div>
                          {errors.map((error) => (
                            <p key={error}>{error}</p>
                          ))}
                        </div>
                      )}
                    </FieldArrayItem>
                  ))}
                </>
              )}
            </FieldArray>
          </div>
        )}
      </Form>
    )
  ).toThrowError();
});

test("field array item should set isValidating with onChange validation", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((_, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                  onChangeValidate={() =>
                    new Promise((resolve) =>
                      setTimeout(() => resolve(true), 50)
                    )
                  }
                >
                  {({ setValue, isValidating }) => (
                    <div>
                      <button onClick={() => setValue(2)}>Set value</button>
                      {isValidating && <p>Validating</p>}
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(queryByText("Validating")).not.toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Validating")).toBeInTheDocument();

  await waitForElementToBeRemoved(() => queryByText("Validating"));
});

test("field array item should set isValidating with onBlur validator", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {() => (
        <FieldArray<{ thing: number }>
          initialValue={[{ thing: 1 }]}
          name={"people"}
        >
          {({ value }) => (
            <>
              {value.map((_, i) => (
                <FieldArrayItem<number>
                  key={`people[${i}].thing`}
                  name={`people[${i}].thing`}
                  onBlurValidate={() =>
                    new Promise((resolve) =>
                      setTimeout(() => resolve(true), 50)
                    )
                  }
                >
                  {({ onBlur, isValidating }) => (
                    <div>
                      <button onClick={() => onBlur()}>Blur</button>
                      {isValidating && <p>Validating</p>}
                    </div>
                  )}
                </FieldArrayItem>
              ))}
            </>
          )}
        </FieldArray>
      )}
    </Form>
  );

  expect(queryByText("Validating")).not.toBeInTheDocument();

  await user.click(getByText("Blur"));

  expect(getByText("Validating")).toBeInTheDocument();

  await waitForElementToBeRemoved(() => queryByText("Validating"));
});

test("field array item should set isValidating with onSubmit validation", async () => {
  const { queryByText, getByText } = render(
    <Form>
      {({ submit }) => (
        <div>
          <FieldArray<{ thing: number }>
            initialValue={[{ thing: 1 }]}
            name={"people"}
          >
            {({ value }) => (
              <>
                {value.map((_, i) => (
                  <FieldArrayItem<number>
                    key={`people[${i}].thing`}
                    name={`people[${i}].thing`}
                    onSubmitValidate={() =>
                      new Promise((resolve) =>
                        setTimeout(() => resolve(true), 50)
                      )
                    }
                  >
                    {({ isValidating }) => (
                      <div>{isValidating && <p>Validating</p>}</div>
                    )}
                  </FieldArrayItem>
                ))}
              </>
            )}
          </FieldArray>
          <button onClick={submit}>Submit</button>
        </div>
      )}
    </Form>
  );

  expect(queryByText("Validating")).not.toBeInTheDocument();

  await user.click(getByText("Submit"));

  expect(getByText("Validating")).toBeInTheDocument();

  await waitForElementToBeRemoved(() => queryByText("Validating"));
});

test("Field array item should not be dirty when form reset", async () => {
  const { getByText } = render(
    <Form>
      {({ reset }) => (
        <>
          <FieldArray<{ thing: number }>
            initialValue={[{ thing: 1 }]}
            name={"people"}
          >
            {({ value }) => (
              <>
                {value.map((person, i) => (
                  <FieldArrayItem<number>
                    key={`people[${i}].thing`}
                    name={`people[${i}].thing`}
                  >
                    {({ setValue, isDirty }) => (
                      <div>
                        <button onClick={() => setValue(2)}>Set value</button>
                        <p>{isDirty ? "Dirty" : "Clean"}</p>
                      </div>
                    )}
                  </FieldArrayItem>
                ))}
              </>
            )}
          </FieldArray>
          <button onClick={() => reset()}>Reset</button>
        </>
      )}
    </Form>
  );

  expect(getByText("Clean")).toBeInTheDocument();

  await user.click(getByText("Set value"));

  expect(getByText("Dirty")).toBeInTheDocument();

  await user.click(getByText("Reset"));

  expect(getByText("Clean")).toBeInTheDocument();
});

test("Removing nested field array items", async () => {
  const mockedSubmit = vi.fn();

  const mockData = [
    {
      name: "Bob",
      children: [{ name: "Sally", toys: [{ name: "Ball" }] }],
    },
    {
      name: "Joe",
      children: [
        { name: "Sue", toys: [{ name: "Car" }] },
        { name: "John", toys: [{ name: "Dinosaur" }] },
      ],
    },
  ];

  const { getByText } = render(
    <Form
      onSubmit={(values) => {
        mockedSubmit(values);
      }}
    >
      {({ submit }) => (
        <>
          <FieldArray name={"people"} initialValue={mockData}>
            {({ value, remove: removePerson }) => (
              <>
                {value.map((person, personIndex) => (
                  <FieldArrayItem
                    key={`person-${personIndex}`}
                    name={`people[${personIndex}].name`}
                  >
                    {({ value }) => (
                      <div>
                        <h1>Person: {value}</h1>
                        <button onClick={() => removePerson(personIndex)}>
                          Remove person {value}
                        </button>
                        <FieldArray
                          name={`people[${personIndex}].children`}
                          initialValue={person.children}
                        >
                          {({ value, remove: removeChild }) => (
                            <>
                              {value.map((child, childIndex) => (
                                <FieldArrayItem
                                  key={`child-${childIndex}`}
                                  name={`people[${personIndex}].children[${childIndex}].name`}
                                  initialValue={child.name}
                                >
                                  {({ value }) => (
                                    <div>
                                      <h2>Child: {value}</h2>
                                      <button
                                        onClick={() => removeChild(childIndex)}
                                      >
                                        Delete child {value}
                                      </button>

                                      <FieldArray
                                        name={`people[${personIndex}].children[${childIndex}].toys`}
                                        initialValue={child.toys}
                                      >
                                        {({ value, remove: removeToy }) => (
                                          <>
                                            {value.map((toy, toyIndex) => (
                                              <FieldArrayItem
                                                key={`toy-${toyIndex}`}
                                                name={`people[${personIndex}].children[${childIndex}].toys[${toyIndex}].name`}
                                                initialValue={toy.name}
                                              >
                                                {({ value }) => (
                                                  <div>
                                                    <p>Toy: {value}</p>
                                                    <button
                                                      onClick={() =>
                                                        removeToy(toyIndex)
                                                      }
                                                    >
                                                      Delete toy {value}
                                                    </button>
                                                  </div>
                                                )}
                                              </FieldArrayItem>
                                            ))}
                                          </>
                                        )}
                                      </FieldArray>
                                    </div>
                                  )}
                                </FieldArrayItem>
                              ))}
                            </>
                          )}
                        </FieldArray>
                      </div>
                    )}
                  </FieldArrayItem>
                ))}
              </>
            )}
          </FieldArray>
          <button onClick={submit}>Submit</button>
        </>
      )}
    </Form>
  );

  const buttonSubmit = getByText("Submit");

  expect(getByText("Person: Bob")).toBeInTheDocument();
  expect(getByText("Person: Joe")).toBeInTheDocument();

  expect(getByText("Child: Sally")).toBeInTheDocument();
  expect(getByText("Child: Sue")).toBeInTheDocument();
  expect(getByText("Child: John")).toBeInTheDocument();

  await user.click(buttonSubmit);

  expect(mockedSubmit).toHaveBeenCalledWith({
    people: mockData,
  });

  await user.click(getByText("Delete child Sally"));
  await user.click(buttonSubmit);

  expect(mockedSubmit).toHaveBeenCalledWith({
    people: [
      {
        name: "Bob",
        children: [],
      },
      {
        name: "Joe",
        children: [
          { name: "Sue", toys: [{ name: "Car" }] },
          { name: "John", toys: [{ name: "Dinosaur" }] },
        ],
      },
    ],
  });

  await user.click(getByText("Delete toy Car"));
  await user.click(buttonSubmit);

  expect(mockedSubmit).toHaveBeenCalledWith({
    people: [
      {
        name: "Bob",
        children: [],
      },
      {
        name: "Joe",
        children: [
          { name: "Sue", toys: [] },
          { name: "John", toys: [{ name: "Dinosaur" }] },
        ],
      },
    ],
  });

  await user.click(getByText("Remove person Joe"));
  await user.click(buttonSubmit);

  expect(mockedSubmit).toHaveBeenCalledWith({
    people: [
      {
        name: "Bob",
        children: [],
      },
    ],
  });

  await user.click(getByText("Remove person Bob"));
  await user.click(buttonSubmit);

  expect(mockedSubmit).toHaveBeenCalledWith({
    people: [],
  });
});
