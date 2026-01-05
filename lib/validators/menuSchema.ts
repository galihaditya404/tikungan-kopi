// Simple validation helper since we aren't using Zod to avoid deps
import { MenuItem } from '@/types/menu';

export function validateMenu(data: Partial<MenuItem>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }

  if (!data.price || data.price < 0) {
    errors.push("Price must be a positive number");
  }

  if (!data.category) {
    errors.push("Category is required");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
