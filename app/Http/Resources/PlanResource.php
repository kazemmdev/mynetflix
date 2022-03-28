<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "display_name" => $this->display_name,
            "expires_at" => "expires at " . $this->getUntil($this->pivot->created_at->addDays(30))
        ];
    }

    protected function getUntil($date) {
        $now = new \DateTime();
        $future_date = new \DateTime($date);
        $interval = $future_date->diff($now);

        if($interval->days > 0) return $interval->format("%a days");
        if($interval->hours > 0) return $interval->format("%h hours");
        if($interval->minutes > 0) return $interval->format("%i minutes");

        return $interval->format("%s seconds");
    }
}
