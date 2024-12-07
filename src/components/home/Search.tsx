import { Button, Checkbox, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useJobContext } from "../../context/jobContext";
import { useEffect } from "react";

interface SearchFormDto {
  description: string;
  location: string;
  isFulltime: boolean;
}

const Search = () => {
  const { setPage, searchParams, setSearchParams } = useJobContext();

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
      description: values.description.trim(),
      location: values.location.trim(),
      isFulltime: values.isFulltime,
    });
    setPage(1);
  };

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      isFulltime: form.values.isFulltime,
    });
  }, [form.values.isFulltime]);

  useEffect(() => {
    if (!form.values.description.trim() && !form.values.location.trim()) {
      setSearchParams({
        description: "",
        location: "",
        isFulltime: form.values.isFulltime,
      });
      setPage(1);
    }
  }, [form.values]);

  const isSearchDisabled = !(
    form.values.description.trim() || form.values.location.trim()
  );

  return (
    <form onSubmit={form.onSubmit((values) => onSubmitSearch(values))}>
      <div className="h-[auto] px-[15px] sm:px-[20px] md:px-[30px] bg-[#eaeaea] flex flex-col md:flex-row gap-[20px] md:gap-[30px] w-full items-center py-[20px]">
        <div className="w-full md:w-[30%]">
          <TextInput
            label={
              <span className="font-bold text-[14px] md:text-[15px] text-[#000]">
                Job Description
              </span>
            }
            maxLength={250}
            placeholder="Filter by title, benefits, companies, expertise"
            {...form.getInputProps("description")}
          />
        </div>
        <div className="w-full md:w-[30%]">
          <TextInput
            label={
              <span className="font-bold text-[14px] md:text-[15px] text-[#000]">
                Location
              </span>
            }
            maxLength={250}
            placeholder="Filter by city, state, zip code or country"
            {...form.getInputProps("location")}
          />
        </div>
        <div className="w-full md:w-[40%] flex items-center gap-[15px] md:gap-[30px] pt-[20px]">
          <Checkbox
            checked={form.values.isFulltime}
            onChange={(e) => form.setFieldValue("isFulltime", e.target.checked)}
            label={
              <p className="font-bold text-[14px] md:text-[15px]">
                Full Time Only
              </p>
            }
          />
          <Button
            type="submit"
            size="sm"
            disabled={isSearchDisabled}
            className="bg-[#0891b2]"
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Search;
