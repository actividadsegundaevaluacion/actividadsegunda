import { ref } from 'vue'
import type { Session } from '@supabase/supabase-js'

const userSesion = ref<Session | null>(null)

export{
    userSesion
}