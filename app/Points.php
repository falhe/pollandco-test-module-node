<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Points extends Model {

    protected $table = 'points';

    protected $fillable = ['pending_points', 'total_points', 'created_at', 'updated_at'];

	/**
     * un points a un user
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users(){
        return $this->hasOne('App\User');
    }

}
