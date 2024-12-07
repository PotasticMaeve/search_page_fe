import { Button, Checkbox, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

interface SearchFormDto {
  description: string;
  location: string;
}

const Search = () => {
  const [isFulltime, setFulltime] = useState<boolean>(false);

  const form = useForm<SearchFormDto>({
    initialValues: {
      description: "",
      location: "",
    },
    validate: {
      description: (value) =>
        value === ""
          ? "This field is required"
          : /^\s*$/.test(value) || /<|>|\*|#|\^/.test(value)
          ? "Invalid Characters"
          : null,
      location: (value) =>
        value === ""
          ? "This field is required"
          : /^\s*$/.test(value) || /<|>|\*|#|\^/.test(value)
          ? "Invalid Characters"
          : null,
    },
    validateInputOnChange: true,
  });

  const onSubmitSearch = (values: SearchFormDto) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit((values) => onSubmitSearch(values))}>
      <div className="h-[80px] px-[30px] bg-[#eaeaea] flex gap-[30px] w-full items-center">
        <div className="w-[40%]">
          <TextInput
            label={<span className="font-bold text-[#000]">Job Description</span>}
            maxLength={250}
            placeholder="Filter by title, benefits, companies, expertise"
            {...form.getInputProps("description")}
          />
        </div>
        <div className="w-[40%]">
          <TextInput
            label={<span className="font-bold text-[#000]">Location</span>}
            maxLength={250}
            placeholder="Filter by city, state, zip code or country"
            {...form.getInputProps("location")}
          />
        </div>
        <div className="w-[20%] flex items-center gap-[30px] pt-[20px]">
          <Checkbox
            checked={isFulltime}
            onChange={() => setFulltime(!isFulltime)}
            label={<p className="font-bold text-[15px]">Full Time Only</p>}
          />
          <Button size="sm" className="bg-[#0891b2]">
            <p className="text-[#fff]">Search</p>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Search;
