'use client'

import * as z from 'zod';
import axios from 'axios'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import {
	
}

const CreatePage = () => {
	return (
		<div>
			Create page!
		</div>
	)
}

export default CreatePage;