<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class ExperienceController extends Controller
{
    public function createExperience(Request $request)
    {
        $request = $request->all();
        $createExperience = "";

        //Nombre para clarificar

        $createExperience = Experience::create([
            'title' => $request['title'],
            'employment_type' => $request['employment_type'],
            'company' => $request['company'],
            'location' => ($request['location']),
            'start_date' => ($request['start_date']),
            'end_date' => ($request['end_date']),
            'user_id' => ($request['user_id']),
            'headline' => ($request['headline']),
            'description' => ($request['description'])
        ]);

        return $createExperience;
    }
    public function showExperience($id)
    {
        $error = 'Experience not found';

        $experienceId = experience::where('id',"=",$id)
            ->first();
        $experienceInfo = array($experienceId['id'],
            $experienceId['title'],
            $experienceId['employment_type'],
            $experienceId['company'],
            $experienceId['location'],
            $experienceId['start_date'],
            $experienceId['end_date'],
            $experienceId['user_id'],
            $experienceId['headline'],
            $experienceId['description']
        );
            if(!empty($experienceId)){
                return $experienceInfo;
            }
            else{
                return $error;
            }
    }

};
