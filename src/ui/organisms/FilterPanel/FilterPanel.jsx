import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDashboardStore } from '../../../store/useDashboardStore';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Select } from '../../atoms/Select/Select';
import { Card } from '../../molecules/Card/Card';
import { FormField } from '../../molecules/FormField/FormField';

export default function FilterPanel() {
  const filters = useDashboardStore((state) => state.filters);
  const setFilters = useDashboardStore((state) => state.setFilters);
  const resetFilters = useDashboardStore((state) => state.resetFilters);

  const { control, reset, watch } = useForm({ defaultValues: filters });

  useEffect(() => {
    const subscription = watch((values) => setFilters(values));
    return () => subscription.unsubscribe();
  }, [watch, setFilters]);

  const handleReset = () => {
    resetFilters();
    reset({
      search: '',
      minPopulation: 0,
      sortKey: 'name',
      sortOrder: 'asc',
    });
  };

  return (
    <Card style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '24px' }}>
      {/* 1. Пошук за назвою */}
      <FormField label="Пошук за назвою:">
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Введіть назву..." />
          )}
        />
      </FormField>

      {/* 2. Мін. населення */}
      <FormField label="Мін. населення:">
        <Controller
          name="minPopulation"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              step="1000000"
              min="0"
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
      </FormField>

      {/* 3. Сортувати за */}
      <FormField label="Сортувати за:">
        <Controller
          name="sortKey"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <option value="name">Назва</option>
              <option value="population">Населення</option>
              <option value="area">Площа</option>
            </Select>
          )}
        />
      </FormField>

      {/* 4. Порядок сортування */}
      <FormField label="Порядок:">
        <Controller
          name="sortOrder"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <option value="asc">Зростання (↑)</option>
              <option value="desc">Спадання (↓)</option>
            </Select>
          )}
        />
      </FormField>

      {/* 5. Кнопка скидання */}
      <Button variant="danger" onClick={handleReset}>
        Скинути фільтри
      </Button>
    </Card>
  );
}