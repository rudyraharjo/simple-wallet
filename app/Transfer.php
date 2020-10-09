<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $table = "transfers";

    public function sender()
 {
        return $this->belongsTo(User::class, 'from_id');
 }
}
