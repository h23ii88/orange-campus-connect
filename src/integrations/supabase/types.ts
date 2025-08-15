export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      application_profiles: {
        Row: {
          act_score: number | null
          career_goals: string | null
          created_at: string
          extracurricular_activities: Json | null
          extracurricular_essay: string | null
          financial_aid_needed: boolean | null
          gpa: number | null
          graduation_year: number | null
          high_school: string | null
          honors_awards: Json | null
          id: string
          intended_major: string | null
          personal_essay: string | null
          sat_score: number | null
          special_circumstances: string | null
          updated_at: string
          user_id: string
          volunteer_experience: Json | null
          why_college_essay: string | null
          work_experience: Json | null
        }
        Insert: {
          act_score?: number | null
          career_goals?: string | null
          created_at?: string
          extracurricular_activities?: Json | null
          extracurricular_essay?: string | null
          financial_aid_needed?: boolean | null
          gpa?: number | null
          graduation_year?: number | null
          high_school?: string | null
          honors_awards?: Json | null
          id?: string
          intended_major?: string | null
          personal_essay?: string | null
          sat_score?: number | null
          special_circumstances?: string | null
          updated_at?: string
          user_id: string
          volunteer_experience?: Json | null
          why_college_essay?: string | null
          work_experience?: Json | null
        }
        Update: {
          act_score?: number | null
          career_goals?: string | null
          created_at?: string
          extracurricular_activities?: Json | null
          extracurricular_essay?: string | null
          financial_aid_needed?: boolean | null
          gpa?: number | null
          graduation_year?: number | null
          high_school?: string | null
          honors_awards?: Json | null
          id?: string
          intended_major?: string | null
          personal_essay?: string | null
          sat_score?: number | null
          special_circumstances?: string | null
          updated_at?: string
          user_id?: string
          volunteer_experience?: Json | null
          why_college_essay?: string | null
          work_experience?: Json | null
        }
        Relationships: []
      }
      cms_content: {
        Row: {
          created_at: string | null
          id: string
          key: string
          page: string | null
          section: string | null
          type: string
          updated_at: string | null
          value: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          key: string
          page?: string | null
          section?: string | null
          type: string
          updated_at?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string
          page?: string | null
          section?: string | null
          type?: string
          updated_at?: string | null
          value?: string | null
        }
        Relationships: []
      }
      college_applications: {
        Row: {
          application_status: string | null
          college_name: string
          created_at: string
          id: string
          submitted_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_status?: string | null
          college_name: string
          created_at?: string
          id?: string
          submitted_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_status?: string | null
          college_name?: string
          created_at?: string
          id?: string
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      colleges: {
        Row: {
          acceptance_rate: string | null
          campus: string | null
          created_at: string | null
          description: string | null
          enrollment: string | null
          founded: number | null
          graduation_rate: string | null
          highlights: Json | null
          id: string
          image_url: string | null
          is_active: boolean | null
          location: string | null
          majors: Json | null
          name: string
          ranking: number | null
          rating: number | null
          state: string | null
          student_faculty_ratio: string | null
          tuition: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          acceptance_rate?: string | null
          campus?: string | null
          created_at?: string | null
          description?: string | null
          enrollment?: string | null
          founded?: number | null
          graduation_rate?: string | null
          highlights?: Json | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          location?: string | null
          majors?: Json | null
          name: string
          ranking?: number | null
          rating?: number | null
          state?: string | null
          student_faculty_ratio?: string | null
          tuition?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          acceptance_rate?: string | null
          campus?: string | null
          created_at?: string | null
          description?: string | null
          enrollment?: string | null
          founded?: number | null
          graduation_rate?: string | null
          highlights?: Json | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          location?: string | null
          majors?: Json | null
          name?: string
          ranking?: number | null
          rating?: number | null
          state?: string | null
          student_faculty_ratio?: string | null
          tuition?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          document_type: string
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          document_type: string
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          document_type?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          age: number | null
          city: string | null
          country: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          state: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          age?: number | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          state?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          age?: number | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          state?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      scholarships: {
        Row: {
          amount: string | null
          applicants: number | null
          application_process: Json | null
          awarded: number | null
          benefits: Json | null
          category: string | null
          contact_info: Json | null
          created_at: string | null
          deadline: string | null
          description: string | null
          eligibility: string | null
          eligibility_details: Json | null
          id: string
          image_url: string | null
          is_active: boolean | null
          provider: string | null
          requirements: Json | null
          selection_criteria: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          amount?: string | null
          applicants?: number | null
          application_process?: Json | null
          awarded?: number | null
          benefits?: Json | null
          category?: string | null
          contact_info?: Json | null
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          eligibility?: string | null
          eligibility_details?: Json | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          provider?: string | null
          requirements?: Json | null
          selection_criteria?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          amount?: string | null
          applicants?: number | null
          application_process?: Json | null
          awarded?: number | null
          benefits?: Json | null
          category?: string | null
          contact_info?: Json | null
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          eligibility?: string | null
          eligibility_details?: Json | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          provider?: string | null
          requirements?: Json | null
          selection_criteria?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "student"],
    },
  },
} as const
