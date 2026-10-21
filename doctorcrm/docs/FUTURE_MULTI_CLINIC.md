# Multi-Clinic Future
Every table already includes `clinic_id`. Profiles have `clinic_id` via roles. To add multi-clinic:
- Add `clinic_id` to profiles.
- Enforce RLS by clinic.
- Update middleware to check clinic scope.
- Add clinic picker UI.
