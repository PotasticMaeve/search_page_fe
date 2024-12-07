import { Button, Checkbox, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useJobContext } from "../../context/jobContext";

interface SearchFormDto {
  description: string;
  location: string;
  isFulltime: boolean;
}

const Search = () => {
  const { fetchJobs, setPage, setSearchParams } = useJobContext();

  const form = useForm<SearchFormDto>({
    initialValues: {
      description: "",
      location: "",
      isFulltime: false,
    },
    validate: {
      description: (value) =>
        value === ""
          ? null
          : /^\s*$/.test(value) || /<|>|\*|#|\^/.test(value)
          ? "Invalid Characters"
          : null,
      location: (value) =>
        value === ""
          ? null
          : /^\s*$/.test(value) || /<|>|\*|#|\^/.test(value)
          ? "Invalid Characters"
          : null,
    },
    validateInputOnChange: true,
  });

  const onSubmitSearch = (values: SearchFormDto) => {
    setSearchParams({
      description: values.description,
      location: values.location,
      isFulltime: values.isFulltime,
    });
    setPage(1)
    fetchJobs();
  };

  return (
    <form onSubmit={form.onSubmit((values) => onSubmitSearch(values))}>
      <div className="h-[100px] px-[30px] bg-[#eaeaea] flex gap-[30px] w-full items-center">
        <div className="w-[40%]">
          <TextInput
            label={
              <span className="font-bold text-[#000]">Job Description</span>
            }
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
            checked={form.values.isFulltime}
            onChange={(e) => form.setFieldValue("isFulltime", e.target.checked)}
            label={<p className="font-bold text-[15px]">Full Time Only</p>}
          />
          <Button type="submit" size="sm" className="bg-[#0891b2]">
            <p className="text-[#fff]">Search</p>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Search;