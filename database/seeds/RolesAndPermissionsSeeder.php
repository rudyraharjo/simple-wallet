<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /// Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create']);
        Permission::create(['name' => 'read']);
        Permission::create(['name' => 'update']);
        Permission::create(['name' => 'delete']);

        Permission::create(['name' => 'create utilities']);
        Permission::create(['name' => 'read utilities']);
        Permission::create(['name' => 'update utilities']);
        Permission::create(['name' => 'delete utilities']);

        $role_adm = Role::create(['name' => 'customer']);
        $role_adm->givePermissionTo(['create', 'read', 'update', 'delete']);

        $role = Role::create(['name' => 'super-admin']);
        $role->givePermissionTo(Permission::all());

    }
}
