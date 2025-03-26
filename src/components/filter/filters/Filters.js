import { useState, useEffect, useMemo } from 'react';
import { useData } from '../../providers';
import { Select } from '../select/Select';
import { Input } from '../input/Input';
import { Buttons } from '../buttons/Buttons';
import {
  BASE_STATUS_OPTIONS,
  BASE_GENDER_OPTIONS,
  BASE_SPECIES_OPTIONS,
  FILTER_KEYS,
  API_BASE_URL
} from './filterConstants';
import { FiltersContainer } from './StyledFilters';

export function Filters() {
  const { setApiURL, setActivePage, characters } = useData();
  const [filters, setFilters] = useState(
    Object.fromEntries(FILTER_KEYS.map((key) => [key, '']))
  );

  const filterOptions = useMemo(() => {
    const options = {
      status: [...BASE_STATUS_OPTIONS],
      gender: [...BASE_GENDER_OPTIONS],
      species: [...BASE_SPECIES_OPTIONS]
    };

    characters.forEach(({ status, gender, species }) => {
      if (status && !options.status.includes(status))
        options.status.push(status);
      if (gender && !options.gender.includes(gender))
        options.gender.push(gender);
      if (species && !options.species.includes(species))
        options.species.push(species);
    });

    return options;
  }, [characters]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const newFilters = Object.fromEntries(
      FILTER_KEYS.filter((key) => params.has(key)).map((key) => [
        key,
        params.get(key)
      ])
    );
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(
      ([key, value]) => value && params.append(key, value)
    );

    const queryString = params.toString();
    window.history.pushState(
      {},
      '',
      queryString ? `?${queryString}` : window.location.pathname
    );

    setActivePage(0);
    setApiURL(queryString ? `${API_BASE_URL}?${queryString}` : API_BASE_URL);
  };

  const resetFilters = () => {
    setFilters(Object.fromEntries(FILTER_KEYS.map((key) => [key, ''])));
    window.history.pushState({}, '', window.location.pathname);
    setActivePage(0);
    setApiURL(API_BASE_URL);
  };

  return (
    <FiltersContainer>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleInputChange}
        gridArea="name"
      />

      <Select
        name="status"
        options={filterOptions.status}
        placeholder="Status"
        value={filters.status}
        onChange={handleSelectChange}
        gridArea="status"
      />

      <Select
        name="species"
        options={filterOptions.species}
        placeholder="Species"
        value={filters.species}
        onChange={handleSelectChange}
        gridArea="species"
      />

      <Input
        type="text"
        name="type"
        placeholder="Type"
        value={filters.type}
        onChange={handleInputChange}
        gridArea="type"
      />

      <Select
        name="gender"
        options={filterOptions.gender}
        placeholder="Gender"
        value={filters.gender}
        onChange={handleSelectChange}
        gridArea="gender"
      />

      <Buttons
        onApply={applyFilters}
        onReset={resetFilters}
        gridArea="buttons"
      />
    </FiltersContainer>
  );
}
